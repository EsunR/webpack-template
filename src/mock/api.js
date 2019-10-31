const fs = require("fs")
const path = require("path")

function fromJSONFile(filename) {
  return (req, res) => {
    console.log(path.resolve(__dirname, "/"))
    const data = fs.readFileSync(`/src/mock/data/${filename}.json`).toString()
    console.log("data: ", data)
    const json = JSON.parse(data)
    return res.json(json)
  }
}
const proxy = {
  "GET /api/user": { id: 1, username: "kenny", sex: 6 }
}
module.exports = proxy
