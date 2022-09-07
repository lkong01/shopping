import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";

function App() {
  const [numItems, setNumItems] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout nums={numItems} />}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Layout(props) {
  return (
    <div>
      <h1>Welcome to the app!</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="cart">Cart</Link> {props.nums}
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
