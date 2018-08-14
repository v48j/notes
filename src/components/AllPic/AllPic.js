import React, { Component } from "react"
import "./allpic.css"
class AllPic extends Component {
  render() {
    const { ml } = this.props
    return (
      <div className="all-pic" style={{ marginLeft: ml }}>
        <img
          src="//m.360buyimg.com/babel/jfs/t25921/87/17730096/87986/7e5deabb/5b62d9a7N6c4d79ff.jpg"
          alt=""
        />
        <img
          src="//img1.360buyimg.com/da/jfs/t23554/31/1776333810/96212/b286ab2b/5b697049Na413b080.jpg"
          alt=""
        />
        <img
          src="//img1.360buyimg.com/da/jfs/t25243/351/372579109/99803/51c1a398/5b6d56e4N5c28be70.jpg"
          alt=""
        />
        <img
          src="//m.360buyimg.com/babel/jfs/t25375/14/496880291/88511/35b50831/5b714391Nf995b1f4.jpg"
          alt=""
        />
        <img
          src="//img1.360buyimg.com/pop/jfs/t23365/142/1460558529/51840/8fac61fa/5b615cc3Nbce0a08e.jpg"
          alt=""
        />
        <img
          src="//m.360buyimg.com/babel/jfs/t23218/82/2015464849/66172/b43d4ad6/5b7141eaN061e16bd.jpg"
          alt=""
        />
        <img
          src="//m.360buyimg.com/babel/jfs/t24253/328/2013704564/72861/6897b26d/5b713e1eN5cacc135.jpg"
          alt=""
        />
      </div>
    )
  }
}

export default AllPic
