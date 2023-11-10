// 獲取 localStorage 裡面陣列
var cart = JSON.parse(window.localStorage.getItem('cart')) || [];

// 獲取元素
var cartList = document.querySelector('.box > ul');

// 判斷陣列裡面有沒有數據
if (!cart.length) {
    cartList.innerHTML = '<div class="cartImage"><img src="../imges/shopping-cart.png"><div>您還沒有添加商品，快去選購吧!</div></div>'
} else {
    function inti(){
        var total = 0;
        var totalprice = 0;
        var li_innerHTML ='';
        cart.forEach(function (item,index) {
            var item_price = toThousands(item.price)
            var subtotal_price = toThousands(item.price * item.cartNumber)
            li_innerHTML += `<li>
            <div class="select">
                <input type="checkbox" data-id="${index}" class="select-item" ${item.isSelect?"checked":""}/>
            </div>
            <div class="img">
                <img src="${item.imageSrc}">
            </div>
            <div class="desc">${item.title}</div>
            <div class="price">
                單價 : $ ${item_price} 元
            </div>
            <div class="number">
                <button data-id="${item.id}" class="sub" ${item.cartNumber == 1 && 'disabled'}>-</button>
                <input type="text" value="${item.cartNumber}">
                <button>+</button>
            </div>
             <div class="subtotal">
                小計 $ ${subtotal_price } 元
            </div>
            <div class="del">
                <button>刪除</button>
            </div></li>
            `
            // 總計、總價
            if(item.isSelect === true) {
            total += item.cartNumber 
            totalprice += item.cartNumber * item.price
            }
    });
    cartList.innerHTML=li_innerHTML;
    
    var total_price = toThousands(totalprice)
    var div = '';
    div = `
            <p>總價 : ${total_price}</p>
            <button>去結算</button>
            <button>清空購物車</button>
            <button>繼續去購物</button>
            <p>總計 : ${total}</p>
            <input type="checkbox" id="all"><span>全選</span>
        `
    $('.bottom').html(div);
    }
    inti()

    // 判斷時選擇按鈕
        var box = document.querySelector('.box')
     box.addEventListener('click',function(e){
        if (e.target.className === 'select-item'){
            cart[e.target.dataset.id].isSelect = !cart[e.target.dataset.id].isSelect 
            inti()
        }
    })

    // 判斷是否全選
    var selectAll = cart.every(function(item){return item.isSelect})
    if (selectAll){
        $('#all').prop('checked',true)
    }
    // 全選按鈕
    var all = document.getElementById('all')
    $('#all').on('click',function(){
        cart.forEach(function(){
            $('.select input').prop('checked',all.checked)
        })
    })
    
    

   
    function toThousands(num) {
        var num = (num || 0).toString(), result = '';
        while (num.length > 3) {
            result = ',' + num.slice(-3) + result;
            num = num.slice(0, num.length - 3);
        }
        if (num) { result = num + result; }
        return result;
    }
}
// 刪除按鈕 綁定一個 click 事件
$('.del').on('click',function(){
    var flag = confirm('確定要刪除商品嗎?')
    if (flag) {
        $(this).parent().remove()
    }
})
