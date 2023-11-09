
$(document).ready(function () {

    var imageChang = [
        ['../imges/prd_image_1/突擊 TK-F HS C(1).jpg'],
        ['../imges/prd_image_2/突擊 TK-TTY A(1).jpg'],
        ['../imges/prd_image_3/馭 DriveX 10METALLIC B(1).jpg'],
        ['../imges/prd_image_4/神速 ARS-90F J(1).jpg'],
        ['../imges/prd_image_5/JS-T1PRO C(1).jpg'],
        ['../imges/prd_image_6/極速 JS-99 O(1).jpg'],
        ['../imges/prd_image_7/極速 JS-800HT G 穿線拍(1).jpg'],
        ['../imges/prd_image_8/55週年紀念拍 BRS-12 SE B(1).jpg'],
        ['../imges/prd_image_9/亮劍 BRS-12N(1).jpg'],
        ['../imges/prd_image_10/突擊TK-66 Q(1).png'],
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
});

// 獲取元素 
var listBox = document.querySelector('.container1 > ul');
//console.log(listBox)

// 創建節點
var frg = document.createDocumentFragment();

data.forEach(function (item) {
    // 創建 li 渲染
    var li = document.createElement('li')
    // li.setAttribute('class','col')
    li.innerHTML = `
    <div class="img"><img src="${item.imageSrc}"></div>
    <p>${item.title}</p>
    <div>售價:NT ${item.price} 元</div>
  `
    // 創建一個 button 按鈕 加入購物車
    var btn = document.createElement('button');
    btn.innerHTML = '加入購物車';
    // 給 button 一個自定義屬性，值 為 data裡面的 prdId
    btn.setAttribute('btnid', item.prdId);
    btn.onclick = addCart;
    li.appendChild(btn);

    // 插入到 frg 裡面
    frg.appendChild(li)
})
// 插入到 ul 裡面
listBox.appendChild(frg);


// 加入購物車功能
function addCart() {
    var addId = this.getAttribute('btnid');
    // 在 data 裡面找到數據
    var addPrd = data.find(function (item) { return item.prdId == addId });

    // 先從 localStorage 裡面獲取一個陣列
    var list = JSON.parse(window.localStorage.getItem('cart')) || []

    // 向陣列裡面添加
    if (!list.length) { //陣列裡面沒有內容
        addPrd.cartNumber = 1
        list.push(addPrd)
    } else { //陣列裡面有內容
        // 判斷陣列裡面有無該條數據
        // some() 只要陣列裡面有任意一條滿足條件的就是 true
        var res = list.some(function (item) { return item.prdId == addId })
        if (res) { // 陣列裡面 有 當前點擊的這條數據
            // 找到這一條數據的 index 把這條數據的 cartNunber ++
            var index = list.findIndex(function (item) { return item.prdId == addId })
            list[index].cartNumber++
        } else { // 陣列裡面 沒有 當前點擊的這條數據
            addPrd.cartNumber = 1
            list.push(addPrd)
        }
    }
    // 組裝好的數據存起來
    window.localStorage.setItem('cart',JSON.stringify(list))
}
