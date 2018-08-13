import React, { Component } from "react"
import Logo from "../Logo/Logo.js"
import "./header.css"
import "../Logo/logo.css"
import Ul from "../Ul/Ul.js"
import Search from "../Search/Search.js"

class Header extends Component {
  render() {
    return (
      <header>
        <Logo />
        <Ul />
        <Search />
      </header>
    )
  }
}

export default Header
