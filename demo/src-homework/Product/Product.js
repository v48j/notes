import React, { Component } from "react"
import "./product.css"

class Product extends Component {
  render() {
    const { imgSrc, p1, p2 } = this.props
    return (
      <div className="product">
        <div
          className="pro-img"
          style={{ backgroundImage: "url(" + imgSrc + ")" }}
        />
        <div className="pro-title">
          <p className="p1">{p1}</p>
          <p>{p2}</p>
          <div className="a2">
            <span>了解详情</span>
            <span>立即购买</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Product
