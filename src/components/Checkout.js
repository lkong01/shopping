import React, { useState } from "react";
import { useEffect } from "react";
import "../styles/checkout.css";
import Nav from "./Nav";

function Checkout(props) {
  const [itemsTotal, setItemsTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [tax, setTax] = useState(0);

  function getTotal() {
    let totalItemsCost = 0;
    let totalCost = 0;
    let tax = 0;
    props.cart.map((item) => {
      totalItemsCost += item.num * item.product.price;
    });

    setItemsTotal(totalItemsCost);
    tax = totalItemsCost * 0.085;
    setTax(tax.toFixed(2));
    totalCost = totalItemsCost + tax;
    setTotal(totalCost.toFixed(2));
  }

  useEffect(() => {
    getTotal();
  }, [props.cart]);

  return (
    <div>
      <Nav cart={props.cart}></Nav>
      <div className="checkout">
        <form action="">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" required />
          <input type="email" placeholder="Email" required />
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="Phone"
          ></input>
          <input type="text" placeholder="Address" required />
          <input type="text" placeholder="Credit/Debit Card" />
          <button>Order</button>
        </form>
        <div className="checkout-total-cost">
          <div className="checkout-cost-item">
            <p>Items:</p>
            <p>${itemsTotal}</p>
          </div>
          <div className="checkout-cost-item">
            <p>Tax:</p>
            <p>${tax}</p>
          </div>
          <div className="checkout-cost-item">
            <p>Shipping:</p>
            <p>${9.99}</p>
          </div>
          <hr />
          <div className="checkout-cost-item checkout-total">
            <p>Total:</p>
            <p>${total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
