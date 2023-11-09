// 獲取 localStorage 裡面陣列
var cart = JSON.parse(window.localStorage.getItem('cart')) || [];

// 獲取元素
var cartList = document.querySelector('.box > ul');

// 判斷陣列裡面有沒有數據
if (!cart.length) {
    cartList.innerHTML = '<div class="cartImage"><img src="../imges/shopping-cart.png"><div>您還沒有添加商品，快去選購吧!</div></div>'
} else {
    // 創建節點
    var frg = document.createDocumentFragment();
    var total = 0;
    var totalprice = 0;
    
    cart.forEach(function (item) {
        var li = document.createElement('li')
        var item_price = toThousands(item.price)
        var subtotal_price = toThousands(item.price * item.cartNumber)
        li.innerHTML = `
    <div class="select">
        <input type="checkbox">
    </div>
    <div class="img">
        <img src="${item.imageSrc}">
    </div>
    <div class="desc">${item.title}</div>
    <div class="price">
       單價 : $ ${item_price} 元
    </div>
    <div class="number">
        <button ${item.cartNumber == 1 && 'disabled'}>-</button>
        <input type="text" value="${item.cartNumber}">
        <button>+</button>
    </div>
    <div class="subtotal">
       小計 $ ${subtotal_price } 元
    </div>
    <div class="del">
        <button>刪除</button>
    </div>
     `
        frg.appendChild(li);

        // 總計、總價
        total += item.cartNumber
        totalprice += item.cartNumber * item.price
    });
    cartList.appendChild(frg);

     var total_price = toThousands(totalprice)
     var div = document.createElement('div');
    div = `
            <p>總價 : ${total_price}</p>
            <button>去結算</button>
            <button>清空購物車</button>
            <button>繼續去購物</button>
            <p>總計 : ${total}</p>
        `
    $('.bottom').append(div);

    
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
//