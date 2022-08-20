import { Link } from "react-router-dom";
import React, { useState } from "react";

function Nav(props) {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="cart">Cart</Link> {props.num}
    </nav>
  );
}

export default Nav;
