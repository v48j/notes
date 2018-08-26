import React, { Component } from "react"
import axios from "axios"
class App extends Component {
  state = {
    user: [
      // {
      //   name: "aaa",
      //   age: 10
      // },
      // {
      //   name: "bbb",
      //   age: 20
      // },
      // {
      //   name: "ccc",
      //   age: 30
      // },
      // {
      //   name: "ddd",
      //   age: 40
      // }
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
  componentDidMount() {
    axios
      .get("http://localhost:3008/user")
      .then(res => {
        this.setState({
          user: res.data
        })
      })
      .catch(function() {
        console.log("失败")
      })
  }

  render() {
    const { show, user } = this.state
    const nameArr = show === "全部" ? user : user.filter(one => one.age > 20)
    const namelist = (
      <ul>
        {nameArr.map(one => (
          <li key={one.id}>{one.name}</li>
        ))}
      </ul>
    )

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
