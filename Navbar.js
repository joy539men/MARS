//購物車圖示動態增加
$('.cartIcon').on('click', function () {
    $('#cartPopup').toggle();
});


$(document).ready(function () {
    const products = [
        {
            "id": 1,
            "name": "Product 1",
            "price": 520,
            "image": "images/1.webp"
        },
        {
            "id": 2,
            "name": "Product 2",
            "price": 220,
            "image": "images/2.webp"
        },
        {
            "id": 3,
            "name": "Product 3",
            "price": 250,
            "image": "images/3.webp"
        }
    ];

   

});




if (!cartItems[productName]) {
    cartItems[productName] = 1; // 如果购物车中没有这种商品，则将其数量设为1
} else {
    // 如果购物车中已有这种商品，则不增加数量
};

// 计算购物车中不重复商品的总数
var uniqueItemCount = Object.keys(cartItems).length;

// 在购物车图标上显示不重复商品的总数
$('#cartCount').text(uniqueItemCount);






