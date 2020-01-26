import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Index from "./pages";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route path="*" component={Index} /> 
        </Switch>

        <Footer />
      </div>
    </Router>
  ); 
}

export default App;
