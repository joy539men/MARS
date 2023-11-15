var cart = JSON.parse(window.localStorage.getItem('cart')) || [];
console.log(cart);

var checkoutList = document.querySelector('#checked_list')
var totalMoney = document.querySelector('#totalMoney')
console.log(checkoutList);
var checkout_innerHTML = ''
var totalMoney_innerHTML = ''
var sum = 0

cart.forEach(function (item, index) {
    if(item.isSelect){
           checkout_innerHTML += `  <tr><td>
    <p class="text-center"><img src="${item.imageSrc}"></p>
</td>
<td>
    <p class="text-center" id="checked_prd">${item.title}</p>
</td>
<td>
    <p class="text-center" id="checked_price">${toThousands(item.price)}元</p>
</td>
<td>
<p class="text-center" id="checked_unmber">${item.cartNumber}</p>
</td>
<td>
    <p class="text-center" id="checked_subtotal">NT ${toThousands(item.price * item.cartNumber)}元</p>
</td></tr>`
    sum += item.cartNumber * item.price
    totalMoney_innerHTML = `總計 NT ${toThousands(sum)} 元`
    }
 
})
checkoutList.innerHTML = checkout_innerHTML
totalMoney.innerHTML = totalMoney_innerHTML

  // 千分位逗號
  function toThousands(num) {
    var num = (num || 0).toString(), result = '';
    while (num.length > 3) {
        result = ',' + num.slice(-3) + result;
        num = num.slice(0, num.length - 3);
    }
    if (num) { result = num + result; }
    return result;
}