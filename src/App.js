import React, { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Products from "./components/Products";
import Nav from "./components/Nav";
import Checkout from "./components/Checkout";
import Order from "./components/Order";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cart = localStorage.getItem("cart");

    if (cart) {
      const foundCart = JSON.parse(cart);
      setCart(foundCart);
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home cart={cart} />} />

          <Route
            path="/products"
            element={<Products cart={cart} setCart={setCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
          <Route path="/checkout" element={<Checkout cart={cart} />} />
          <Route path="/order" element={<Order cart={cart} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
