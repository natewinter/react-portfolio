import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./components/pages/Discover";
import Home from "./components/pages/Home";
import NavTabs from "./components/NavTabs";
import Background from "./components/pages/features";
import Footer from "./components/pages/footer/footer";

function App() {
  return (
    <Router>
      <div>
        <Background />
        <Route exact path="/" component={Home} />
        <Route exact path="/Discover" component={Discover} />
        <NavTabs />
        <Footer />
      </div>
    </Router>
  );
}
export default App;
