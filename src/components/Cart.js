import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/cart.css";
import Nav from "./Nav";

function Cart(props) {
  const [total, setTotal] = useState(0);

  function handleDecrease(e) {
    console.log(e.target.value);
    const index = e.target.value;
    const cart = [...props.cart];
    cart[index].num -= 1;
    if (cart[index].num === 0) {
      cart.splice(index, 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    props.setCart(cart);
  }

  function handleIncrease(e) {
    console.log(e.target.value);
    const index = e.target.value;
    const cart = [...props.cart];
    cart[index].num += 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    props.setCart(cart);
  }

  function getTotal() {
    let totalCost = 0;
    props.cart.map((item) => {
      totalCost += item.num * item.product.price;
    });

    setTotal(totalCost);
  }

  // function handleChange(e) {
  //   console.log(e.target.name);

  //   const index = e.target.name;
  //   const cart = [...props.cart];
  //   cart[index].num += e.target.value;
  //   props.setCart(cart);
  // }

  useEffect(() => {
    getTotal();
  }, [props.cart]);

  return (
    <div>
      <Nav cart={props.cart}></Nav>

      <div className="cart">
        <h1>Cart</h1>
        <div className="cart-content">
          {" "}
          <div className="cart-items">
            {props.cart.length === 0 ? <div>Your cart is empty.</div> : ""}
            {props.cart.map((item, index) => {
              return (
                <div className="cart-item" key={index}>
                  <img src={item.product.pic} alt={item.product.name} />
                  <div className="cart-item-info">
                    <div className="cart-item-name">{item.product.name}</div>
                    <div className="cart-item-price">${item.product.price}</div>
                    <div className="cart-item-control">
                      <button value={index} onClick={handleDecrease}>
                        -
                      </button>
                      <input
                        type="number"
                        name={index}
                        value={item.num}
                        // onChange={handleChange}
                      />
                      <button value={index} onClick={handleIncrease}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-total">
            <h2>Subtotal: ${total.toFixed(2)}</h2>
            <Link to="/products">Continue Shopping</Link>
            <Link to="/checkout">Checkout</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
