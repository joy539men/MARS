// 商品照片、標題內容、價格
$(document).ready(function () {
    var imageInfo = [
        {
            imageSrc: '../imges/prd_image_1/突擊 TK-F HS C.jpg',
            title: '突擊 TK-F HS C',
            price: '8,787',
        },
        {
            imageSrc: '../imges/prd_image_2/突擊 TK-TTY A.jpg',
            title: '突擊 TK-TTY A',
            price: ' 5,656',
        },
        {
            imageSrc: '../imges/prd_image_3/馭 DriveX 10METALLIC B.jpg',
            title: '馭 DriveX 10METALLIC B',
            price: '7,777',
        },
        {
            imageSrc: '../imges/prd_image_4/神速 ARS-90F J.jpg',
            title: '神速 ARS-90F J',
            price: ' 6,666',
        },
    ];

    var imageChang = [
        ['../imges/prd_image_1/突擊 TK-F HS C(1).jpg'],
        ['../imges/prd_image_2/突擊 TK-TTY A(1).jpg'],
        ['../imges/prd_image_3/馭 DriveX 10METALLIC B(1).jpg'],
        ['../imges/prd_image_4/神速 ARS-90F J(1).jpg'],
    ];

    $('.listItem li').each(function (index) {
        var image = imageInfo[index];
        $(this).find('.prdPic').attr('src', image.imageSrc);
        $(this).find('h3').text(image.title);
        $(this).find('p').text(image.price);
    });

    $('.listItem li .prdPic').each(function (index) {
        $(this).on('mouseleave', function () {
            var originalImage = imageInfo[index].imageSrc;
            $(this).attr('src', originalImage);
        });
        $(this).on('mouseenter', function () {
            var newImagesrc = imageChang[index][0];
            $(this).attr('src', newImagesrc);
        });
    })
});



