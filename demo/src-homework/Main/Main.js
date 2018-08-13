import React, { Component } from "react"
import "../Banner/banner.css"
import AllProduct from "../AllProduct/AllProduct.js"
import Banner from "../Banner/Banner.js"
import "./main.css"
class Main extends Component {
  render() {
    return (
      <div>
        <Banner />
        <div className="all-pro-bg">
          <AllProduct />
        </div>
      </div>
    )
  }
}

export default Main
