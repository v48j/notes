### 创建 react 开发环境

- 安装：npm i -g create-react-app

- 创建文件夹：`create-react-app react-hello`，里面装的是 react 的开发环境

- 启动 在文件夹下执行`npm start`

### 实例 1 给组件添加点击事件

- 知识点

  1.接受父元素传递来的 props

  2.设定默认样式

  3.事件的绑定

  4.类

- 注意点

  1.给元素写行内样式 style 时，style 内写的是对象形式，因此有两个大括号

  2.接受到的 props 是只读的，不可改变

  3.注意 this 的指向，本例中 this 指的是实例化的模型 button

  4.添加的函数，名字后面不能有括号，否则会立即执行

  5.ruturn 的结果只能有一个父元素包裹多个子元素

```js
//子元素
import React, { Component } from "react"
import PropTypes from "prop-types" //需要规定默认的值的类型时引入
import "./button.css"

class Button extends Component {
  handleClick() {
    console.log(1)
  }
  render() {
    // 设置 props 的默认值
    // 方案 1
    // const defaultProps = {text: '按钮', color: '#000'}
    // const { color, text } = { ...defaultProps, ...this.props }
    // 方案 2
    const { text, color, fn } = this.props
    return (
      <button className="btn" onClick={fn} style={{ color: color }}>
        {text}
      </button>
    )
  }
}

export default Button

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  click: PropTypes.func
}
Button.defaultProps = {
  text: "按钮",
  color: "#000"
}

//父元素---------------------------------------------------------------
import React, { Component } from 'react'
import './header.css'
import Button from '../Button/Button'
class Header extends Component {
  singIn() {
    alert('登录')
  }
  logoClick(a) {
    console.log(a)
  }
  // logoClick 想要作为点击事件的函数， 并且这个函数需要传参。
  // 就不能直接将 img 的 onClick = {this.logoClick(1)},相当于 onClick 被赋值成一个值了，并不是函数了
  // 我们将调用 logoClick 的函数调用 放在一个匿名函数内 赋值给 img 的 onClick 属性，这样这个匿名函数就成为了事件函数，需要注意的是我们要在匿名函数内调用 Header 类的 logoClick 方法需使用 this.logoClick ,所以我们要将匿名函数写成 es6 的箭头函数，以为箭头函数 this 声明的时候就绑定了。如果使用普通函数找不到 this。
  render() {
    return (
      <div>
        <header>
          <div className="logo">
            <img
              src="http://image.morethan.cc/template/index/default/css/images/Morethan_logo.png"
              alt=""
              onClick={() => {
                this.logoClick(1)
              }}
            />
          </div>
          <div>
            {/* 父组件如何向子组件传递 props  在组件标签内部传递当做组件的属性传递*/}
            <Button text="登录" color="red" fn={this.singIn} />
            <Button text="注册" color="blue" />
            <Button />
          </div>
        </header>
      </div>
    )
  }
}

export default Header
```

- 关于类和类的继承

  1.组件里的类，本质是一个构造函数，通过继承的形式写好，最终 return 出一个实例化模型

  2.类的内部全部都是方法，有一个 render()方法和若干个自己定义的私有方法，**这些私有方法建议用箭头函数写**，因此函数内的 this 就是指向实例化模型，否则用普通方法写出的函数，this 指向目标是谁调用指向谁(window)

```js
class Header extends Component {
  singIn() {
    alert("登录")
  }
  logoClick(a) {
    console.log(a)
  }

  render() {
    const { a, b, c } = this.props
    return <header />
  }
}

export default Header
```
