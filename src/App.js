import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

// TODO: Import About
// TODO: Import Contact
// TODO: Import React Router
import About from "./pages/About";
import Contact from "./pages/Contact";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
       <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* TODO: Implement Routing Here */}
      
      {/* <Home /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
