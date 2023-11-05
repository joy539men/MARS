//購物車圖示動態增加
$('.cartIcon').on('click', function () {
    $('#cartPopup').toggle();
});

$(document).ready(function () {
    var productInfo = [
        {
            id : 1 ,
            imageSrc: '../imges/prd_image_1/突擊 TK-F HS C.jpg',
            title: '突擊 TK-F HS C',
            price: '8,787',
        },
        {
            imageSrc: '../imges/prd_image_2/突擊 TK-TTY A.jpg',
            title: '突擊 TK-TTY A',
            price: '5,656',
        },
        {
            imageSrc: '../imges/prd_image_3/馭 DriveX 10METALLIC B.jpg',
            title: '馭 DriveX 10METALLIC B',
            price: '7,777',
        },
        {
            imageSrc: '../imges/prd_image_4/神速 ARS-90F J.jpg',
            title: '神速 ARS-90F J',
            price: '6,666',
        },
    ];

    var imageChang = [
        ['../imges/prd_image_1/突擊 TK-F HS C(1).jpg'],
        ['../imges/prd_image_2/突擊 TK-TTY A(1).jpg'],
        ['../imges/prd_image_3/馭 DriveX 10METALLIC B(1).jpg'],
        ['../imges/prd_image_4/神速 ARS-90F J(1).jpg'],
    ];

    $('.listItem li').each(function (index) {
        var image = productInfo[index];
        $(this).find('.prdPic').attr('src', image.imageSrc);
        $(this).find('h3').text(image.title);
        $(this).find('p').text(image.price);
    });

// 更換商品圖片效果
    $('.listItem li .prdPic').each(function (index) {
        $(this).on('mouseleave', function () {
            var originalImage = productInfo[index].imageSrc;
            $(this).attr('src', originalImage);
        });
        $(this).on('mouseenter', function () {
            var newImagesrc = imageChang[index][0];
            $(this).attr('src', newImagesrc);
        });
    })

// 商品加入購物車清單內容
    $('.addCart').click(function(){
        var pdInfo = $(this).closest(".product");
        var pdSrc = pdInfo.find('.prdPic').attr("src")
        var pdName = pdInfo.find("h3").text();
        var pdPrice = pdInfo.find('p').text();
        var pdQuantity = parseInt(pdInfo.find('.quantity').val());

            $('.cartpop').append(`
            <tr calss="name">
                <td style="border: 1.3px solid black"><img src="${pdSrc}" style="width:90px">&nbsp;&nbsp;&nbsp;<span>${pdName}</span></td>
                <td style="border: 1.3px solid black; text-align: center;">NT ${pdPrice} 元</td>
                <td class="quItem" style="border: 1.3px solid black;  text-align: center;">${pdQuantity}</td>
                <td style="border: 1.3px solid black;  text-align: center;"><button>刪除</td>
            </tr>`);
        
        
        
            
        


    });
});



