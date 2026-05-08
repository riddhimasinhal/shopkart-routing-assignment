import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

// TODO: Import About
// TODO: Import Contact
// TODO: Import React Router
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
      {/* TODO: Implement Routing Here */}
      
      <Home />
    </div>
  );
}

export default App;
