import img from './img/webpack.png';

let app = document.querySelector("#app")
app.innerHTML = "Hello webpack"

let imgDom = document.createElement("img")
imgDom.src = img
imgDom.style.display = "block"
app.appendChild(imgDom)