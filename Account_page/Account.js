function show_hide() {
    var login = document.getElementById("container1");
    var signup = document.getElementById("container2");
   
  
    if (login.style.display === "none") {
        login.style.display = "block";  //login出現
        document.getElementById("username").value="";
        document.getElementById("password").value="";
        signup.style.display = "none";  //signup消失
        
    } else {
        login.style.display = "none";   //login消失
        signup.style.display = "block"; //signup出現
        signup.style.visibility="visible";
        
     
        document.getElementById("fullname").value="";
        document.getElementById("username2").value="";
        document.getElementById("password2").value="";
        document.getElementById("comfirm_password").value="";
    }
}