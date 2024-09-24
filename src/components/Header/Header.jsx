import React from "react";
import search from "../../assets/svg/search.svg";
import wishlist from "../../assets/svg/wishlist.svg";
import cart from "../../assets/svg/cart.svg";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="top-header">
        <div className="container flex">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <select>
            <option value="kg">KGZ</option>
            <option value="en">END</option>
            <option value="ru">RUS</option>
          </select>
        </div>
      </div>
      <header className="header container">
        <div className="header-left">
          <h1>Exclusive</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/register">Sing up</Link>
            </li>
          </ul>
        </div>
        <div className="header-right">
          <div className="search">
            <input type="text" placeholder="What are you looking for?" />
            <img src={search} alt="" />
          </div>
          <div className="icons">
            <img src={wishlist} alt="" />
            <img src={cart} alt="" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
