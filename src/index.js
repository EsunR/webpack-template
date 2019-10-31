import img from "./img/webpack.png"
import axios from "axios"

const app = document.querySelector("#app")
app.innerHTML = "Hello webpack"

const imgDom = document.createElement("img")
imgDom.src = img
imgDom.style.display = "block"
app.appendChild(imgDom)

axios.get("http://localhost:8080/api/user").then(res => {
  console.log(res.data)
})
