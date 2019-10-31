import img from "./img/webpack.png"
import axios from "axios"
import config from "./config"

const app = document.querySelector("#app")
app.innerHTML = "Hello webpack"

const imgDom = document.createElement("img")
imgDom.src = img
imgDom.style.display = "block"
app.appendChild(imgDom)

// axios.defaults.baseURL = config.host
axios.get("/user").then(res => {
  console.log(res.data)
})
