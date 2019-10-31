# 说明

本 Demo 实现了简单的前端应用模块化，主要实现原理是读取入口页面，将页面的 html 进行解析编译，将页面中子组件再进行递归编译，最终挂载到顶层页面的目标元素上。

# 渲染引擎核心

```js
// utils/tpl-engine.js
export default class TplEngin {
  constructor() {
    this.app = ""
    this.html = ""
  }
  mount(id, component) {
    this.app = document.querySelector(id)
    // 将目标组件挂载到页面元素上
    this.app.innerHTML = this.render(component)
  }
  render(component) {
    // 读取目标组件的 html
    this.html = component.template
    // 遍历目标组件中的子组件
    for (let tagName in component.components) {
      let component = component.components[tagName]
      // 对子组件进行递归渲染
      this.html = this._replace(this.html, tagName, this.render(component))
    }
    return this.html
  }
  /**
   * 将当前组件中的子组件渲染出来
   * @param {String} html 当前组件的 HTML 字符串
   * @param {String} tagName 组件的标签名字
   * @param {String} componentHtml 组件的 HTML 字符串
   */
  _replace(html, tagName, componentHtml) {
    let reg = new RegExp(`\<\s*${tagName}((\s+.*?(\/\s*${tagName}|\/))|(\/)|(\>.*?\/\s*${tagName}))\s*\>`, "g")
    return html.replace(reg, componentHtml)
  }
}
```

