import React, { Component } from "react"
import Product from "../Product/Product.js"
import "./all-products.css"
import pic1 from "../images/1.jpg"
import pic2 from "../images/2.jpg"
import pic3 from "../images/3.jpg"
import pic4 from "../images/4.jpg"
class AllProduct extends Component {
  render() {
    return (
      <div className="all-products">
        <Product
          imgSrc={pic1}
          p1="双频86型面板AP，手机上网快6倍"
          p2="TP-LINK双频无线面板式AP"
        />
        <Product
          imgSrc={pic2}
          p1="大器·方成"
          p2="AC5400三频千兆无线路由器 TL-WTR9520"
        />
        <Product
          imgSrc={pic3}
          p1="带雷达的摄像头，远程户外监控之重大工程革新"
          p2="远距离无线回传网络摄像一体机 TL-IPC325K-6-C53"
        />
        <Product
          imgSrc={pic4}
          p1="双频，全千兆端口，1167Mbps高速无线"
          p2="AC1200双频千兆无线路由器TL-WDR5620千兆版"
        />
      </div>
    )
  }
}

export default AllProduct
