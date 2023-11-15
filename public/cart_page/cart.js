// 獲取 localStorage 裡面陣列
var cart = JSON.parse(window.localStorage.getItem('cart')) || [];

// 獲取元素
var cartList = document.querySelector('.box > ul');
var all = document.getElementById('all');
var delItem = document.querySelector('.del-item');
var totalCount = document.getElementById('totalCount');
var totalPrice = document.getElementById('totalPrice');
// 判斷陣列裡面有沒有數據
if (!cart.length) {
    cartList.innerHTML = '<div class="cartImage"><img src="../imges/shopping-cart.png"><div>您還沒有添加商品，快去選購吧!</div></div>'
} else {
    function inti() {
        var count = 0;
        var sum = 0
        var allCount = 0
        var li_innerHTML = '';
        cart.forEach(function (item, index) {
            var item_price = toThousands(item.price)
            var subtotal_price = toThousands(item.price * item.cartNumber)
            li_innerHTML += `<li>
            <div class="select">
                <input type="checkbox" id="${index}" class="select-item" ${item.isSelect ? "checked" : ""}/>
            </div>
            <div class="img">
                <img src="${item.imageSrc}">
            </div>
            <div class="desc">${item.title}</div>
            <div class="price">
                單價 : $ ${item_price} 元
            </div>
            <div class="number">
                <button class="reduce" id="${index}" ${item.cartNumber == 1 && 'disabled'}>-</button>
                <input type="text"  value="${item.cartNumber}">
                <button class="add" id="${index}">+</button>
            </div>
             <div class="subtotal">
                小計 $ ${subtotal_price} 元
            </div>
            `
            if (item.isSelect) {
                allCount += item.cartNumber
                sum += item.cartNumber * item.price
                count ++
            }
        });
        cartList.innerHTML = li_innerHTML;
        // 總數量
        totalCount.innerHTML = allCount;
        // 總價
        totalPrice.innerHTML = toThousands(sum);

        all.checked = cart.length > 0 && count === cart.length
        window.localStorage.setItem('cart', JSON.stringify(cart))
        if (!cart.length) {
            cartList.innerHTML = '<div class="cartImage"><img src="../imges/shopping-cart.png"><div>您還沒有添加商品，快去選購吧!</div></div>'
        }
    }
    inti()

    // box事件委託
    var box = document.querySelector('.box')
    box.addEventListener('click', function (e) {
        // 數量增加
        if (e.target.className == 'add') {
            cart[e.target.id].cartNumber++;
            inti()
        }
        // 數量減少
        if (e.target.className == 'reduce') {
            cart[e.target.id].cartNumber--;
            inti()
        }
        // 複選框
        if (e.target.className == 'select-item') {
            cart[e.target.id].isSelect = !cart[e.target.id].isSelect
            inti()
        }

    })
    // 全選框
    all.addEventListener('click', function () {
        cart.forEach(function (item) {
            item.isSelect = all.checked
        })
        inti()
    })
    // 刪除所選商品
    delItem.addEventListener('click', function () {
        var res = cart.some(function (item) { return item.isSelect == true })
        if (res) {
            showAlert1()
        } else {
            showAlert2()
        } 
    })
    // 彈跳視窗函示
    showAlert1 = () => {
        Swal.fire({
            icon: 'question',
            title: '刪除商品',
            text: '確定要刪除商品嗎?',
        }).then((result) => {
            console.log(result)
            if(result.isConfirmed){
                cart = cart.filter(function (ele, index) {
                            return !ele.isSelect
                        })
                        inti()
            }
        })
    }
    
    showAlert2 = () => {
        Swal.fire({
            icon: 'warning',
            title: '未選取任何商品',
            text: '請先選取想刪除的商品!',
        })
    }

    // 千分位逗號
    function toThousands(num) {
        var num = (num || 0).toString(), result = '';
        while (num.length > 3) {
            result = ',' + num.slice(-3) + result;
            num = num.slice(0, num.length - 3);
        }
        if (num) { result = num + result; }
        return result;
    }

    function checkout(){
    location.href = '../cart_page/Checkout.html'
}
    

}
