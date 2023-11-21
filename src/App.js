import React from "react";
import Home from "./page/Home";
import Shop from "./page/Shop";
import Header from "./layout/Header";
import Footer from "./layout/Footer";


function App() {



  return (
    <>
      <div className="App">
        <Header />
        {/* <Home /> */}
        <Shop />
        <Footer />
      </div>
    </>
  );
}

export default App;
