//購物車圖示動態增加、視窗懸浮效果
$(function(){
    var cartItem = 0;
    $('#addCart').on('click',function(){
        cartItem++;
        $('#cartCount').text(cartItem);
    });
    $('.cartIcon').on('mouseover',function(){
        $('#cartPopup').show();
    });
    $('.cartIcon').on('mouseout',function(){
        $('#cartPopup').hide();
    })
 });