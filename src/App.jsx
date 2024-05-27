import React, { useEffect, useState } from "react";
import "./scss/App.scss";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NoPage from "./pages/NoPage";
import axios from "axios";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [items, setItems] = useState([]);

  const getBreads = async () => {
    axios.get("https://645eb3f0fac65847a3c784f8.mockapi.io/breads").then((res) => {
      const itemWithCount = res.data.map((obj) => {
        return { ...obj, count: 0 };
      });
      setItems(itemWithCount);
    });
  };

  useEffect(() => {
    getBreads();
  }, []);

  // useEffect(() => {
  //   console.log(items);
  // }, [items]);
  const cartItems = items.filter((obj) => obj.count !== 0);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home items={items} setItems={setItems} />} />
          <Route path="/cart" element={<Cart items={cartItems} setItems={setItems} />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
