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

### src 下文件夹格式

- 文件夹

  1.asset/ 存放公共 css 以及一些常量 内容：global.css

  2.component/ 存放展示组件 js

  3.containers/ 存放容器组件 内容 例如 ：MainContainer.js

  4.reducers/ 存放初始化数据，改变数据的 action 内容 index.js,xxx.js

  5.store/ 存放所有数据，讲所有数据汇总 内容 index.js

  6.selectors/ 存放获得衍生数据的方法 内容 index.js

- 数据流程

  1.获取数据：reducers->store->containers->component

  2.修改数据：component->reducers

  > 1.reducers 内存有若干个 state，最终汇总在 index.js 下,输出，store 接收

  > 2.store 引入 creatStore,将引入的数据生成 store，输出，容器组件接收

  > 3.容器组件通过 mapStateToProps 方法.将收到的 store 转化成自己的 props，并传给展示组件。注意，容器组件通常是无 state，直接是一个方法输出展示组件

  > 4.展示组件。接收到父级容器组件传来的 store，存在自己的 props 中，返回的 DOM 节点可能需要这些数据或者衍生数据，这个时候需要调用 selectors 中的方法来获得衍生数据，不要再展示组件中写函数。

  > 5.改变数据。展示组件中可能点击按钮会修改 store，但 store 是只读的，只有唯一方法，就是触发预留在 reducers 中的 action 来改变 store。例如，点击按钮后，执行 store.dispatch()方法去触发 action，改变 store

### 文件格式，写法

#### reducers(若干组件合并到 index 中)

- 组件 例如：filter.js

```js
import shortId from "shortid"
const inistialState = []
const todos = (state = inistialState, action) => {
  switch (action.type) {
    case "ADD_LIST":
      return [...state, { id: shortId(), todotext: action.text, finish: false }]
    case "CHANGE_FINISH":
      return state.map(ele => {
        if (ele.id === action.id) {
          ele.finish = !ele.finish
        }
        return ele
      })
    default:
      return state
  }
}
export default todos
//其中包括增加新的数据和更新数据
```

- index.js

```js
import { combineReducers } from "redux"
import filter from "./filter"
import todos from "./todos"

const rootReducer = combineReducers({ filter, todos })
export default rootReducer
//combinReducers方法允许合并多个state
```

#### store(仅一个 index)

```js
import { createStore, applyMiddleware } from "redux"
import rootReducer from "../reducers"
import logger from "redux-logger"

const store = createStore(rootReducer, applyMiddleware(logger))
export default store
//注：applyMiddleware(logger)是一个可以显示store变化的插件，可有可无，方便开发时分析
```

#### containers(容器组件文件夹，里面不需要 index)

```js
import React from "react"
import { connect } from "react-redux"
import Main from "../component/Main"
const MainContainer = props => <Main {...props} />
const mapStateToProps = state => ({
  filter: state.filter,
  todos: state.todos
})
export default connect(mapStateToProps)(MainContainer)
//将store通过props传给展示组件
```

#### component(展示组件,修改 store)

```js
import React, { Component } from "react"
import styled from "styled-components"
import store from "../store/index"
import { getLeftNum } from "../selectors"
class Menu extends Component {
  setfilter = type => {
    store.dispatch({
      type: type
      xx:xxx
    })
  }
  render() {
    const { todos } = this.props
    console.log(todos)

    const num = getLeftNum(todos)
    return (
      <Wrap>
        <span>{num} items left</span>
      </Wrap>
    )
  }
}

export default Menu
const Wrap = styled.div`
  display: flex;
`
//注：styled包是可以把样式写在js中，本例中getLeftNum方法引入新方法来获得衍生数据。store.dispatch方法用于修改store，这个函数必须有一个参数type。表示发送的action类型，由reducers中的组件来接收action.type。
```

#### selectors

```js
export const getcurrentTodos = (todos, filter) => {
  switch (filter) {
    case "All":
      return todos
    case "Active":
      return todos.filter(ele => !ele.finish)
    case "Complete":
      return todos.filter(ele => ele.finish)
    default:
      break
  }
}

export const getLeftNum = todos => todos.filter(ele => !ele.finish).length
```
