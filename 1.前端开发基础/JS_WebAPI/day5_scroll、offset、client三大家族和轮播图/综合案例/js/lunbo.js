let smallLinks = document.querySelectorAll(".smallImage li");
let bigLinks = document.querySelectorAll(".bigImage li");
let title = document.querySelector("h3");
let indicators = document.querySelectorAll(".indicator span");
let arrow = document.querySelector(".arrow");
let smallUl = document.querySelector(".smallImage");
let timer = null;

// 封装更换图片的函数
function changeImage(imgIndex) {
  // 利用传来的小图片索引，找到图片数组中对应的数据
  // 无限循环
  if (imgIndex < 0) {
    imgIndex = 9;
  }
  if (imgIndex > 9) {
    imgIndex = 0;
  }
  // 先排他
  for (let i = 0; i < smallLinks.length; i++) {
    smallLinks[i].classList.remove("active");
    smallLinks[i].firstElementChild.style.zIndex = 0;
    bigLinks[i].classList.remove("show");
  }
  // 复活自己
  smallLinks[imgIndex].classList.add("active");
  smallLinks[imgIndex].firstElementChild.style.zIndex = 1;
  bigLinks[imgIndex].classList.add("show");
  title.innerHTML = `第${imgIndex + 1}张图片的描述信息`;
}

// 鼠标经过小图片，记住小图片的索引
let index = 0;
function changeSmallLinks() {
  for (let i = 0; i < smallLinks.length; i++) {
    smallLinks[i].addEventListener("mouseenter", function () {
      clearInterval(timer);
      index = i;
      changeImage(index);
    });
    smallLinks[i].addEventListener("mouseleave", function () {
      timer = setInterval(function () {
        changeImage(index);
      }, 1000);
    });
  }
  smallUl.addEventListener("click", function (e) {
    // 阻止a标签默认跳转事件
    e.preventDefault();
  });
}

function changeIndicators() {
  for (let i = 0; i < indicators.length; i++) {
    indicators[i].addEventListener("mouseenter", function () {
      this.style.backgroundPosition = -30 * (2 * i + 1) + "px 0";
    });
    indicators[i].addEventListener("mouseleave", function () {
      this.style.backgroundPosition = -30 * 2 * i + "px 0";
    });
  }
  arrow.addEventListener("click", function (e) {
    if (e.target.className === "prev") {
      // 图片左移，图片索引-1
      changeImage(--index);
    }
    if (e.target.className === "next") {
      // 图片右移，图片索引+1
      changeImage(++index);
    }
  });
}

changeSmallLinks();
changeIndicators();

// 自动轮播
timer = setInterval(function () {
  changeImage(index++);
}, 1000);
