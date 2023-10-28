//  商品照片效果 
// $(document).ready(function() {
//     var imageSets = [
//         ['image1.jpg', 'image2.jpg', 'image3.jpg'], // 图片组1
//         ['imageA.jpg', 'imageB.jpg', 'imageC.jpg']  // 图片组2
//         // 可以继续添加更多的图片组
//     ];

//     var currentIndex = 0;
//     var currentSet = 0; // 当前显示的图片组索引

//     function setImages(setIndex) {
//         $('#mainImage').attr('src', imageSets[setIndex][currentIndex]);
//     }

//     // 鼠标悬停时切换至下一个图片组
//     $('#mainImage').on('mouseover', function() {
//         currentSet = (currentSet + 1) % imageSets.length;
//         setImages(currentSet);
//     });

//     // 鼠标移出时回到第一个图片组
//     $('#mainImage').on('mouseout', function() {
//         currentSet = 0;
//         setImages(currentSet);
//     });

//     // 初始显示第一个图片组的第一张图片
//     setImages(currentSet);
// });

$(function(){
    var imageChang = [
        {
            
        }
    ];
    $(".prdPic").on({
        "mouseout": function () {
            $(".prdPic").attr("src", "../imges/突擊 TK-F HS C/突擊 TK-F HS C.jpg");
        },
        "mouseover": function () {
            $(".prdPic").attr("src", "../imges/突擊 TK-F HS C/突擊 TK-F HS C(1).jpg");
        }
    });
})
// 商品照片 標題內容
$(document).ready(function(){
    var imageInfo = [
        {
            imageSrc : '../imges/突擊 TK-F HS C/突擊 TK-F HS C.jpg',
            title : '突擊 TK-F HS C',
            price : '售價 NT 7,000',
        },
        {
            imageSrc : '../imges/突擊 TK-TTY A/突擊 TK-TTY A.jpg',
            title : '突擊 TK-TTY',
            price : '售價 NT 5,656',
        }
    ];
    
    // var imageList = $('.listItem li');

    $('.listItem li').each(function(index){
            var image = imageInfo[index];
            $(this).find('.prdPic').attr('src',image.imageSrc);
            $(this).find('.h3').text(image.title);
            $(this).find('.prdPic').text(image.price);
        });
});