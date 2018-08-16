import React, { Component } from "react"

class App extends Component {
  state = {
    user: [
      {
        name: "aaa",
        age: 10
      },
      {
        name: "bbb",
        age: 20
      },
      {
        name: "ccc",
        age: 30
      },
      {
        name: "ddd",
        age: 40
      }
    ],
    show: "全部"
  }
  showAll = () => {
    this.setState({
      show: "全部"
    })
  }
  showMore20 = () => {
    this.setState({
      show: "大于20"
    })
  }
  render() {
    const { show, user } = this.state
    const nameArr = show === "全部" ? user : user.filter(one => one.age > 20)
    const namelist = (
      <ul>
        {nameArr.map(one => (
          <li>{one.name}</li>
        ))}
      </ul>
    )
    console.log(namelist)

    return (
      <div>
        <button onClick={this.showMore20}>大于20</button>
        <button onClick={this.showAll}>全部</button>
        <div>{namelist}</div>
      </div>
    )
  }
}

export default App
