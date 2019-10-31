/**
 * 清空标签内容
 * @param {string} query 
 */
export default function (query) {
  let dom = document.querySelector(query)
  dom.innerHTML = ""
}