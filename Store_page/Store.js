//購物車圖示動態增加
$('.cartIcon').on('click', function () {
    $('#cartPopup').toggle();
});

$(document).ready(function () {
    
    var imageChang = [
        ['../imges/prd_image_1/突擊 TK-F HS C(1).jpg'],
        ['../imges/prd_image_2/突擊 TK-TTY A(1).jpg'],
        ['../imges/prd_image_3/馭 DriveX 10METALLIC B(1).jpg'],
        ['../imges/prd_image_4/神速 ARS-90F J(1).jpg'],
    ];

    // 更換商品圖片效果
    $('.container1 li img').each(function (index) {
        $(this).on('mouseleave', function () {
            var originalImage = data[index].imageSrc;
            $(this).attr('src', originalImage);
        });
        $(this).on('mouseenter', function () {
            var newImagesrc = imageChang[index][0];
            $(this).attr('src', newImagesrc);
        });
    })

    // 商品加入購物車清單內容
    $('.addCart').click(function () {
        var pdInfo = $(this).closest(".product");
        var pdSrc = pdInfo.find('.prdPic').attr("src")
        var pdName = pdInfo.find("h3").text();
        var pdPrice = pdInfo.find('p').text();
        var pdQuantity = parseInt(pdInfo.find('.quantity').val());

        var cartList = `
            <tr class="${pdName}">
                <td style="border: 1.3px solid black"><img src="${pdSrc}" style="width:90px">&nbsp;&nbsp;&nbsp;<span>${pdName}</span></td>
                <td style="border: 1.3px solid black; text-align: center;">NT ${pdPrice} 元</td>
                <td class="quItem" style="border: 1.3px solid black;  text-align: center;">${pdQuantity}</td>
                <td style="border: 1.3px solid black;  text-align: center;"><button>刪除</td>
            </tr>`;



        $('.cartpop').append(cartList);

    });
});

// 獲取元素 
var listBox = document.querySelector('.container1 > ul');
//console.log(listBox)

// 渲染 - 創建節點
var frg = document.createDocumentFragment();

data.forEach(function (item) {
    // 創建 li
    var li = document.createElement('li')
    li.innerHTML = `
    <div class="img"><img src="${item.imageSrc}"></div>
    <p>${item.title}</p>
    <span>NT ${item.price} 元</span>
  `
  // 插入到 frg 裡面
  frg.appendChild(li)
})
// 插入到 ul 裡面
listBox.appendChild(frg);

