import React, { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Products from "./components/Products";
import Layout from "./components/Layout";

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
          <Route path="/" element={<Layout cart={cart} />}>
            <Route index element={<Home />} />
            <Route
              path="/products"
              element={<Products cart={cart} setCart={setCart} />}
            />
            <Route
              path="/cart"
              element={<Cart cart={cart} setCart={setCart} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
