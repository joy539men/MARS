//購物車圖示動態增加
$('.cartIcon').on('click', function () {
    $('#cartPopup').toggle();
});

$(document).ready(function () {



    var cartItems = {}; // 用于存储购物车中的商品及其数量
    $(".addCart").on("click", function () {
        var productInfo = $(this).closest(".product"); // 获取最近的包含商品信息的父元素
        var productName = productInfo.find("h3").text(); // 获取商品名称
        var productImage = productInfo.find(".prdPic").attr("src"); // 获取商品图片链接
        var productPrice = productInfo.find('p').text();
        var productQuantity = parseInt(productInfo.find(".product-quantity").val()); // 获取商品数量

        // 检查购物车中是否已存在相同商品
        var existingProduct = $("#cartItemlist").find(`li[data-name="${productName}"]`);

        if (existingProduct.length > 0) {
            var currentQuantity = parseInt(existingProduct.find(".quantity").text());
            existingProduct.find(".quantity").text(currentQuantity + productQuantity); // 更新现有商品的数量
        } else {
            // 创建包含商品信息的 HTML 元素
            var cartItem = `<li data-name="${productName}" data-price="${productPrice}">
                                   <img src="${productImage}" width="50px">
                                   <span>${productName} </span>&nbsp;&nbsp;&nbsp;數量 : 
                                   <span class="quantity">${productQuantity}</span>&nbsp;&nbsp;&nbsp;
                                   <span>單價 : ${productPrice}</span>
                                    <button class="deleteCartItem">删除</button>
                                </li>`;
            // 将商品信息添加到购物车弹出窗口中的购物车列表
            $("#cartItemlist").append(cartItem);
            updateTotalPrice();
        };
        function updateTotalPrice() {
            var totalPrice = 0;
            $("#cartItemlist li").each(function() {
                var quantity = $(this).find(".quantityInput").val();
                var price = $(this).data("price");
                var itemTotal = quantity * price;
                totalPrice += itemTotal;
            });
    
            $("#totalPrice").text("Total: $" + totalPrice);
        }
    
        // Delete a cart item and update the total price
        $("#cartItemlist").on("click", ".deleteCartItem", function() {
            $(this).parent().remove();
            updateTotalPrice();
        });
    
        // Update total price when the quantity changes
        $("#cartItemlist").on("input", ".quantityInput", function() {
            updateTotalPrice();
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
    });
});




