export default class TplEngin {
  constructor() {
    this.app = ""
    this.html = ""
  }
  render(entry) {
    this.html = entry.template
    for (let tagName in entry.components) {
      let component = entry.components[tagName]
      this.html = this._replace(this.html, tagName, component.template)
    }
    return this.html
  }
  mount(id, entry) {
    this.app = document.querySelector(id)
    this.app.innerHTML = this.render(entry)
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