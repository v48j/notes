import React, { Component } from "react"
import banner from "../images/banner.jpg"

class Banner extends Component {
  render() {
    return (
      <div>
        <img src={banner} className="banner" />
      </div>
    )
  }
}

export default Banner
