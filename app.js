// 以 Express 建立 Web 伺服器
var express = require("express");
var app = express();

// 以 body-parser 模組協助 Express 解析表單與JSON資料
var bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({extended: false}) );

// Web 伺服器的靜態檔案置於 public 資料夾
app.use( express.static( "public" ) );

// 以 express-session 管理狀態資訊
var session = require('express-session');
app.use(session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: true
}));

// 指定 ejs 為 Express 的畫面處理引擎
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');

// 一切就緒，開始接受用戶端連線
app.listen(3000);
console.log("Web伺服器就緒，開始接受用戶端連線.");
console.log("「Ctrl + C」可結束伺服器程式.");

app.get("/",function(req,res){
    var username = req.session.username || "Guest";
    res.render("Store.ejs",{userName:username}) // ejs module
})

app.get("/login.html",function(req,res){
    res.render("Account.ejs",{}) 
})

app.get("/logout", function (req, res) {
    // req.session.who = "Guest";
    delete req.session.username;
    res.redirect("/");
})

app.post("/logincheck",function(req,res){
    req.session.username = req.body.username ;
    res.redirect("/");
    //res.send("I got form data. userName:"+ req.body.who) 
})