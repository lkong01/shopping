import React, { useState } from "react";
import Nav from "./Nav";
import "../styles/order.css";

function Order(props) {
  const [order, setOrder] = useState([]);
  return (
    <div>
      <Nav cart={props.cart}></Nav>
      <div className="order">
        {order.length === 0 ? "You don't have any order." : ""}
      </div>
    </div>
  );
}

export default Order;
