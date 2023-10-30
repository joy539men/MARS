//購物車圖示動態增加
$(function () {
    var cartItem = 0;
    $('.addCart').on('click', function () {
        cartItem++;
        $('#cartCount').text(cartItem);
    });
    $('.cartIcon').on('mouseover', function () {
        $('#cartPopup').show();
    });
    $('.cartIcon').on('mouseout', function () {
        $('#cartPopup').hide();
    });

    $('.addCart').on('click', function () {
        var group = $(this).data('group');
        var selectedQuantity = $('.product-quantity option:selected').val();
        var item = "商品 " + group + '*' + selectedQuantity + '支'; 
        addToCart(item);
    });
    function addToCart(item) {
        var cartItemsList = $('#cartItemlist');
        var listItem = $('<li>').text(item);
        cartItemsList.append(listItem);
    }
});

