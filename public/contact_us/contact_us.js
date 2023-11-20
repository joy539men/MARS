let sendButton = document.querySelector('button');
console.log(sendButton);
function send() {
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let phone = document.querySelector('#phone').value;
  let Comments = document.querySelector('#Comments').text;
  $.ajax({
    type: "get",
    url: "https://script.google.com/macros/s/AKfycbzfCGfUAogYnVar4CknAYNWH9NXaVLMmJvaFtOH0XTZ9RtwqVUXM1PWczbhyAcwzs6-uw/exec",
    data: {
      "name": name, /* 屬性名稱需與 Google Sheet 相同 */
      "email": email, /* 屬性名稱需與 Google Sheet 相同 */
      "phone": phone, /* 屬性名稱需與 Google Sheet 相同 */
      "Comments": Comments, /* 屬性名稱需與 Google Sheet 相同 */
    },
    dataType: "JSON",
    success: function(response) {
      console.log(response);
      if(response == "成功"){
        alert("成功");
      }
    },
  });
};

sendButton.addEventListener('click', send);