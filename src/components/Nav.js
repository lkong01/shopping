import React, { useState } from "react";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Favicon from "../images/favicon.ico";
import CartIcon from "../images/icons8-shopping-cart-48.png";
import "../styles/nav.css";

function Layout(props) {
  const [numItems, setNumItems] = useState(0);
  let count = 0;

  function getNumItems() {
    props.cart.map((item) => {
      count += item.num;
    });
    setNumItems(count);
  }

  useEffect(() => getNumItems(), [props]);

  return (
    <nav>
      <div className="nav-main">
        <Link to="/">
          <img src={Favicon} alt="favicon" />
        </Link>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </div>
      <div className="nav-cart">
        <Link to="/cart">
          <img src={CartIcon} alt="cart-icon" />
        </Link>{" "}
        {numItems}
      </div>
    </nav>
  );
}

export default Layout;
