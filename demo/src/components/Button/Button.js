import React, { Component } from "react"
import "./button.css"
import PropTypes from "prop-types"

class Button extends Component {
  render() {
    const { text, color, click } = this.props
    return (
      <button style={{ color: color }} className="sign-up" onClick={click}>
        {text}
      </button>
    )
  }
}

export default Button
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  click: PropTypes.func
}
Button.defaultProps = {
  text: "默认",
  color: "#f50"
}
