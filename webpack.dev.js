const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const apiMocker = require("webpack-api-mocker")
const path = require("path")

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
    before(app) {
      apiMocker(app, path.resolve("./src/mock/api.js"))
    }
  }
})
