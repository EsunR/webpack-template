const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const apiMocker = require("webpack-api-mocker")
const path = require("path")
let hostPort = 8080

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
    port: hostPort,
    before(app) {
      apiMocker(app, path.resolve(__dirname, "./mock/api.js"), {
        proxy: {
          "/api/(.*)": `http://localhost:${hostPort}`
        },
        changeHost: true
      })
    }
  }
})
