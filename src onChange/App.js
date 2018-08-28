import React, { Component } from "react"

class App extends Component {
  state = {
    name: "",
    text: "456",
    sel: "请选择",
    sex: "女",
    check: ture
  }
  change = event => {
    this.setState({
      name: event.target.value
    })
  }
  change2 = event => {
    this.setState({
      text: event.target.value
    })
  }
  change3 = event => {
    this.setState({
      sel: event.target.value
    })
  }
  change4 = event => {
    this.setState({
      sex: event.target.value
    })
  }
  change5 = event => {
    this.setState({
      check: !this.state.check
    })
  }
  render() {
    const { name, text, sel, sex } = this.state
    return (
      <div>
        <label htmlFor="username">用户名</label>
        <input
          type="text"
          id="username"
          placeholder="haha"
          value={name}
          onChange={this.change}
        />
        <textarea value={text} onChange={this.change2} cols="30" rows="10" />
        <select value={sel} onChange={this.change3}>
          <option value="one">1</option>
          <option value="two">2</option>
          <option value="three">3</option>
          <option value="four">4</option>
        </select>
        <span>男</span>
        <input
          type="radio"
          value="男"
          name="sex"
          checked={sex === "男" ? true : false}
          onChange={this.change4}
        />
        <span>女</span>
        <input
          type="radio"
          value="女"
          name="sex"
          checked={sex === "女" ? true : false}
          onChange={this.change4}
        />
        <span>小</span>
        <input
          type="checkbox"
          value="s"
          onChange={this.change5}
          checked={check}
        />
      </div>
    )
  }
}

export default App
