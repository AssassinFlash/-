import "../css/title.less";
import "../css/img.less";
import zznh from "../img/zznh.png";
// 引入字体图标
import "../font/iconfont.css"

const divEl = document.createElement("div");
divEl.className = "title";
divEl.innerHTML = "你好，webpack";

const imgDiv = document.createElement("div");
imgDiv.className = "imgDiv";

const imgEl = document.createElement("img");
imgEl.src = zznh;

// 字体图标
const iEl = document.createElement("i");
iEl.className = "iconfont iconashbin"

document.body.appendChild(divEl);
document.body.appendChild(imgDiv);
document.body.appendChild(imgEl);
document.body.appendChild(iEl)
