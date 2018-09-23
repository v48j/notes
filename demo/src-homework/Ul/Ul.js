import React, { Component } from "react"
import "./ul.css"
class Ul extends Component {
  render() {
    return (
      <ul>
        <li>
          <a href="#">产品中心</a>
        </li>
        <li>
          <a href="#">商用网络</a>
        </li>
        <li>
          <a href="#">安防监控</a>
        </li>
        <li>
          <a href="#">服务支持</a>
        </li>
        <li>
          <a href="#">官方商城</a>
        </li>
      </ul>
    )
  }
}

export default Ul
