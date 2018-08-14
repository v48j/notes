import React, { Component } from "react"
import "./pagebtn.css"
class PageBtn extends Component {
  state = {
    index: 0
  }
  getIndex = () => {
    this.setState({
      index: this.props.index
    })
  }

  render() {
    const { fn, index } = this.props
    return <span onClick={fn(3)} className="page-btn" />
  }
}

export default PageBtn
