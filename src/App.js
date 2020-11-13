import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./components/pages/Discover";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar/index";
import Background from "./components/pages/features";
import "bootstrap/dist/css/bootstrap.min.css";
import BottomBar from "./components/pages/footer/footer";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Background />
          <Navbar />
          <Route exact path="/Discover" component={Discover} />
          <Route exact path="/About" component={About} />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
      <BottomBar />
    </div>
  );
}
export default App;
