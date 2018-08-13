import React, { Component } from "react"
import "./Header.css"
import logo from "../../images/1111.jpg"
import Button from "../Button/Button"
class Header extends Component {
  signin = () => {
    alert("注册")
  }
  signup = () => {
    alert("登录")
  }
  logoClick = event => {
    console.log(event)
  }
  render() {
    return (
      <header>
        <img
          className="logo"
          src={logo}
          alt=""
          onClick={() => {
            this.logoClick
          }}
        />
        <div>
          <Button text="登录" color="red" click={this.signup} />
          <Button text="注册" color="blue" click={this.signin} />
          <Button />
        </div>
      </header>
    )
  }
}

export default Header
