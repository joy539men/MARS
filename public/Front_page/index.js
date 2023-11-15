

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        var animatedDiv = document.querySelector("#pic-1");
        var scrollPosition = window.scrollY;

        if (scrollPosition > 450) {
            animatedDiv.style.right = "100px"; // 設定滾動後div要滑入的位置
        } else {
            animatedDiv.style.right = "-900px"; // 設定滾動前div要滑出的位置
        }
    });
    window.addEventListener("scroll", function () {
        var animatedDiv = document.querySelector("#pic-2");
        var scrollPosition = window.scrollY;

        if (scrollPosition > 670) {
            animatedDiv.style.right = "-100px"; // 設定滾動後div要滑入的位置
        } else {
            animatedDiv.style.right = "900px"; // 設定滾動前div要滑出的位置
        }
    });
    window.addEventListener("scroll", function () {
        var animatedDiv = document.querySelector("#pic-3");
        var scrollPosition = window.scrollY;

        if (scrollPosition > 1000) {
            animatedDiv.style.right = "100px"; // 設定滾動後div要滑入的位置
        } else {
            animatedDiv.style.right = "-900px"; // 設定滾動前div要滑出的位置
        }
    });
    window.addEventListener("scroll", function () {
        var animatedDiv = document.querySelector("#pic-4");
        var scrollPosition = window.scrollY;

        if (scrollPosition > 1300) {
            animatedDiv.style.right = "-100px"; // 設定滾動後div要滑入的位置
        } else {
            animatedDiv.style.right = "900px"; // 設定滾動前div要滑出的位置
        }
    });
    window.addEventListener("scroll", function () {
        var animatedDiv = document.querySelector("#pic-5");
        var scrollPosition = window.scrollY;

        if (scrollPosition > 1830) {
            animatedDiv.style.right = "100px"; // 設定滾動後div要滑入的位置
        } else {
            animatedDiv.style.right = "-900px"; // 設定滾動前div要滑出的位置
        }
    });
    window.addEventListener("scroll", function () {
        var animatedDiv = document.querySelector("#pic-6");
        var scrollPosition = window.scrollY;

        if (scrollPosition > 2090) {
            animatedDiv.style.right = "-100px"; // 設定滾動後div要滑入的位置
        } else {
            animatedDiv.style.right = "900px"; // 設定滾動前div要滑出的位置
        }
    });
});

