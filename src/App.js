import React from "react";
import Home from "./page/Home";
import Shop from "./page/Shop";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import AddCart from "./page/AddCart";
import { Route, Routes } from "react-router-dom";
import Search from "./layout/Search";


function App() {



  return (
    <>
      <div className="App">
        <Search />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Shop />} />
          <Route path="/addcart" element={<AddCart />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
