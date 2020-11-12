import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./components/pages/Discover";
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
          <Navbar />
          <Background />
          <Route exact path="/" component={Home} />
          <Route exact path="/Discover" component={Discover} />
        </div>
      </Router>
      <BottomBar />
    </div>
  );
}
export default App;
