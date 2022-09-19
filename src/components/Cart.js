import React, { useState } from "react";
import { useEffect } from "react";
import "../styles/cart.css";

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
    <div className="cart">
      cart
      {props.cart.length === 0 ? <div>Your cart is empty.</div> : ""}
      {props.cart.map((item, index) => {
        return (
          <div className="cart-item" key={index}>
            <img src={item.product.pic} alt={item.product.name} />
            <div className="cart-item-into">
              <div className="cart-item-title">
                {item.product.name} {item.product.price}
              </div>

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
        );
      })}
      Subtotal ${total.toFixed(2)}
      <a href="/products">Continue Shopping</a>
      <a href="/checkout">Checkout</a>
    </div>
  );
}

export default Cart;
