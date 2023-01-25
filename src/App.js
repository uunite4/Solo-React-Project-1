import React from "react";

import Picture from "./components/Picture";
import Info from "./components/Info";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="wrapper">
      <Picture />
      <div className="main">
        <Info />
        <About />
      </div>
      <Footer />
    </div>
  )
}