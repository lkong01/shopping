import React, { useState } from "react";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

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
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="products">Products</Link> |{" "}
        <Link to="cart">Cart</Link> {numItems}
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
