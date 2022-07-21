import "../css/title.less";
import "../css/img.less";
import zznh from "../img/zznh.png";

const divEl = document.createElement("div");
divEl.className = "title";
divEl.innerHTML = "你好，webpack";

const imgDiv = document.createElement("div");
imgDiv.className = "imgDiv";

const imgEl = document.createElement("img");
imgEl.src = zznh;

document.body.appendChild(divEl);
document.body.appendChild(imgDiv);
document.body.appendChild(imgEl);
