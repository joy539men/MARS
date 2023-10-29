// 商品照片 標題內容
$(document).ready(function () {
    var imageInfo = [
        {
            imageSrc: '../imges/prd_image_1/突擊 TK-F HS C.jpg',
            title: '突擊 TK-F HS C',
            price: '售價 NT 7,000',
        },
        {
            imageSrc: '../imges/prd_image_2/突擊 TK-TTY A.jpg',
            title: '突擊 TK-TTY',
            price: '售價 NT 5,656',
        }
    ];

    var imageChang = [
        ['../imges/prd_image_1/突擊 TK-F HS C(1).jpg'],
        ['../imges/prd_image_2/突擊 TK-TTY A(1).jpg'],
    ];

    $('.listItem li').each(function (index) {
        var image = imageInfo[index];
        $(this).find('.prdPic').attr('src', image.imageSrc);
        $(this).find('h3').text(image.title);
        $(this).find('p').text(image.price);
    });

    $('.listItem li .prdPic').each(function (index) {
        $(this).on('mouseout', function () {
            var originalImage = imageInfo[index].imageSrc;
            $(this).attr('src', originalImage);
        });
        $(this).on('mouseover', function () {
            var newImagesrc = imageChang[index][0];
            $(this).attr('src', newImagesrc);
        });
    })


});