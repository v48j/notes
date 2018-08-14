import React, { Component } from "react"
import "./show.css"
import AllPic from "../AllPic/AllPic"
import PageBtn from "../PageBtn/PageBtn"
class Show extends Component {
  state = {
    move: 0,
    index: 0
  }
  getIndex(val) {
    this.setState({
      index: val
    })
  }
  render() {
    console.log(this.state.index)
    return (
      <div className="show">
        <AllPic ml="-590px" />
        <div className="page">
          <PageBtn index="0" />
          <PageBtn
            index="1"
            fn={function(val) {
              this.setState({
                index: val
              })
            }}
          />
          <PageBtn index="2" />
          <PageBtn index="3" />
          <PageBtn index="4" />
          <PageBtn index="5" />
          <PageBtn index="6" />
        </div>
      </div>
    )
  }
}

export default Show
