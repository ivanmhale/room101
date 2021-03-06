import React, { Component } from "react";
import MagnifyingGlass from "../assets/icons/SVG/magnifying-glass";
import ShoppingCart from "../assets/icons/SVG/shopping-cart";
import logo_words from "../assets/logo_words.jpg";
import logo_blossom from "../assets/logo_blossom.jpg";

class Header extends Component {
  state = {
    active: false
  };

  toggleNav() {
    if (!this.state.active) {
      document.getElementById("nav_button").classList.add("active");
      document.getElementById("shadow").classList.add("active");
      document.getElementById("nav_list").classList.add("active_nav");
      return this.setState({
        active: true
      });
    }
    this.setState({
      active: false
    });
    document.getElementById("nav_button").classList.remove("active");
    document.getElementById("shadow").classList.remove("active");
    document.getElementById("nav_list").classList.remove("active_nav");
  }
  render() {
    return (
      <div className="section header">
        <ul className="nav">
          <li>Collections</li>
          <li>Conspiracy</li>
          <li>About</li>
          <li>Stocklist</li>
          <li>Contact</li>
          <li>Account</li>

          <li className="search">
            <MagnifyingGlass />
          </li>

          <li>
            <ShoppingCart />
          </li>
        </ul>
        <header className="App-header">
          <a href="/">
          <img src={logo_blossom} className="logo_blossom" alt="logo" />
          <img src={logo_words} className="logo_words" alt="logo" />
          </a>
        </header>

        <nav>
          <div
            id="nav_button"
            className="nav_button"
            onClick={this.toggleNav.bind(this)}
          >
            <img src={logo_blossom} className="App-logo" alt="logo" />
          </div>
          <span id="shadow" className="shadow"></span>
          <div id="nav_list" className="nav_list">
            <ul className="mobile_nav">
              <li>Collections</li>
              <li>Conspiracy</li>
              <li>About</li>
              <li>Stocklist</li>
              <li>Contact</li>
              <li>Account</li>

              <li className="search">
                <MagnifyingGlass />
              </li>

              <li>
                <ShoppingCart />
              </li>
            </ul>
          </div>
          <div className="logo_words">
            <a href="/">
            <img src={logo_words} className="App-logo" alt="logo" />
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
