import "../css/style.less";
const divEl = document.createElement("div");
divEl.innerHTML = "你好, webpack";

const imgEl = document.createElement("div");
imgEl.classList.add("img");

document.body.appendChild(divEl);
document.body.appendChild(imgEl);
