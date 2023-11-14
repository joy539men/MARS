// 取得 DOM
//   var animatedBox = document.getElementById("pic-1");
var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

console.log(scrollPosition);
//   if(scrollPosition > 600) {
//     // animatedBox.style.position = "fixed";
//     animatedBox.style.right = "0px";
//     animatedBox.style.opacity = "1";
//   }else{
//     // animatedBox.style.position = "absolute";
//     animatedBox.style.right = "-200px";
//     animatedBox.style.opacity = "0";
//   }

// ----- 製作 牌組 的進場動畫 -----
// 取得牌組的 DOM
//   var boxBox_1 = document.getElementById("pic-1");
//   var boxBox_2 = document.getElementById("pic-2");
//   var boxBox_3 = document.getElementById("pic-3");
//   var boxBox_4 = document.getElementById("pic-4");

//   if(scrollPosition > 850) {
//     boxBox_1.style.opacity = "1";
//     // boxBox_1.style.transform = "rotatey(360deg)";
//     boxBox_1.style.transition = "all 1s"
//     // boxBox_1.style.transition = "transform 1.5s ease-in-out"; 
//   }else {
//     boxBox_1.style.opacity = "0";
//   }

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        var animatedDiv = document.querySelector("#pic-1");
        var scrollPosition = window.scrollY;

        if (scrollPosition > 600) {
            animatedDiv.style.right = "100px"; // 設定滾動後div要滑入的位置
        } else {
            animatedDiv.style.right = "-500px"; // 設定滾動前div要滑出的位置
        }
    });
    window.addEventListener("scroll", function () {
        var animatedDiv = document.querySelector("#pic-2");
        var scrollPosition = window.scrollY;

        if (scrollPosition > 800) {
            animatedDiv.style.right = "-80px"; // 設定滾動後div要滑入的位置
        } else {
            animatedDiv.style.right = "700px"; // 設定滾動前div要滑出的位置
        }
    });
    window.addEventListener("scroll", function () {
        var animatedDiv = document.querySelector("#pic-3");
        var scrollPosition = window.scrollY;

        if (scrollPosition > 1000) {
            animatedDiv.style.right = "100px"; // 設定滾動後div要滑入的位置
        } else {
            animatedDiv.style.right = "-500px"; // 設定滾動前div要滑出的位置
        }
    });
    window.addEventListener("scroll", function () {
        var animatedDiv = document.querySelector("#pic-4");
        var scrollPosition = window.scrollY;

        if (scrollPosition > 1700) {
            animatedDiv.style.right = "-80px"; // 設定滾動後div要滑入的位置
        } else {
            animatedDiv.style.right = "700px"; // 設定滾動前div要滑出的位置
        }
    });
    window.addEventListener("scroll", function () {
        var animatedDiv = document.querySelector("#pic-5");
        var scrollPosition = window.scrollY;

        if (scrollPosition > 1400) {
            animatedDiv.style.right = "100px"; // 設定滾動後div要滑入的位置
        } else {
            animatedDiv.style.right = "-500px"; // 設定滾動前div要滑出的位置
        }
    });
    window.addEventListener("scroll", function () {
        var animatedDiv = document.querySelector("#pic-6");
        var scrollPosition = window.scrollY;

        if (scrollPosition > 1600) {
            animatedDiv.style.right = "-80px"; // 設定滾動後div要滑入的位置
        } else {
            animatedDiv.style.right = "700px"; // 設定滾動前div要滑出的位置
        }
    });
});

