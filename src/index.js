import img from "./img/webpack.png"

const app = document.querySelector("#app")
app.innerHTML = "Hello webpack"

const imgDom = document.createElement("img")
imgDom.src = img
imgDom.style.display = "block"
app.appendChild(imgDom)

let arr = [1, 2, 3]
let result = arr.find(item => {
  if (item === 1) {
    return true
  }
})
console.log(result)

let myMap = new Map()
myMap.set("key", "value")
console.log(myMap.get("key"))

new Promise(resolve => {
  setTimeout(() => {
    resolve("done")
  }, 200)
}).then(res => {
  console.log(res)
})
