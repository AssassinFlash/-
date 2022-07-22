import "../css/style.less";
import zznh from "../img/zznh.png";

const divEl = document.createElement("div");
divEl.className = "title";
divEl.innerHTML = "你好, webpack";

const bigImgEl = document.createElement("img");
bigImgEl.className = "img";

const imgEl = document.createElement("img");
imgEl.src = zznh;

document.body.appendChild(divEl);
document.body.appendChild(bigImgEl);
document.body.appendChild(imgEl);
