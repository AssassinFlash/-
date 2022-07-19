// 每一栏商品数目加减
let reduceBtns = document.querySelectorAll(".reduce");
let addBtns = document.querySelectorAll(".add");
let numIpts = document.querySelectorAll(".num");
let unitSpans = document.querySelectorAll(".unit");
let unitTotalPriceSpans = document.querySelectorAll(".unit-totalPrice");
let itemCheckbox = document.querySelectorAll(".item");
function updateUnitItemAndPrice(flag, index) {
  if (flag === "add") {
    numIpts[index].value = +numIpts[index].value + 1;
    // 单件商品总价
    unitTotalPriceSpans[index].innerHTML = (
      numIpts[index].value * unitSpans[index].innerHTML
    ).toString();
  }
  if (flag === "minus") {
    numIpts[index].value = numIpts[index].value - 1;
    // 单件商品总价
    unitTotalPriceSpans[index].innerHTML = (
      numIpts[index].value * unitSpans[index].innerHTML
    ).toString();
  }
}
function addAndminus() {
  for (let i = 0; i < reduceBtns.length; i++) {
    // 当商品数目为1时，禁用减按钮
    reduceBtns[i].disabled = +numIpts[i].value === 1;
    reduceBtns[i].addEventListener("click", function () {
      updateUnitItemAndPrice("minus", i);
      // 检查该商品是否被勾选，是则更新总的
      if (itemCheckbox[i].checked) {
        
      }
      reduceBtns[i].disabled = +numIpts[i].value === 1;
    });

    addBtns[i].addEventListener("click", function () {
      updateUnitItemAndPrice("add", i);
      // 检查该商品是否被勾选，是则更新总的
      if (itemCheckbox[i].checked) {
        updateItemAndPrice("add", i);
      }
      reduceBtns[i].disabled = false;
    });
  }
}

// 点击某项商品的勾选项时，将该商品的数目和总价添加到总的数目和总价上
let totalItem = document.querySelector(".total .items");
let totalPrice = document.querySelector(".total .money");
function updateItemAndPrice(flag, index) {
  if (flag === "add") {
    let sumItem = 0
    let sumPrice = 0
    for(let i = 0; i < itemCheckbox.length; i++) {
      if(itemCheckbox[i].checked) {
        sumItem = sumItem + +numIpts[i].value
        console.log(1);     
      }
    }
  }
  if (flag === "minus") {
    for(let i = 0; i < itemCheckbox.length; i++) {
      
    }
    totalItem.innerHTML -= numIpts[index].value;
    totalPrice.innerHTML -= unitTotalPriceSpans[index].innerHTML;
  }
}
function totalItemAndPrice() {
  for (let i = 0; i < itemCheckbox.length; i++) {
    itemCheckbox[i].addEventListener("click", function () {
      // 选中才执行
      if (this.checked) {
        updateItemAndPrice("add", i);
      } else {
        // 取消该商品的勾选，总数目和总价即去除该商品的数目和价格
        updateItemAndPrice("minus", i);
      }
    });
  }
}

addAndminus();
totalItemAndPrice();
