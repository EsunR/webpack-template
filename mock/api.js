const fs = require("fs")
const path = require("path")

function fromJSONFile(filename) {
  return (req, res) => {
    let mockPath = path.resolve(__dirname, "./data")
    console.log("mockPath: ", mockPath)
    const data = fs.readFileSync(`${mockPath}\\${filename}.json`).toString()
    const json = JSON.parse(data)
    return res.json(json)
  }
}
const proxy = {
  "GET /user": fromJSONFile("user")
}
module.exports = proxy
