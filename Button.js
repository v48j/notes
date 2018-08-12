import React, { Component } from "react"
import "./button.css"

class Button extends Component {
  //组件内的render方法就是将
  //jsx语法内想要写js语法 要使用大括号包裹
  //jsx 内给标签 class 名，需要使用className 属性
  //单一组件的 class 名最好不要和别的组件冲突
  render() {
    return <button className ='btn' style={{ color: 'red' }}>按钮</button>
  }
}

export default Button
