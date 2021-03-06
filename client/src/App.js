import React, { Component, useContext } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect, useLocation } from "react-router-dom";
import { UserProvider } from "./userContext";
import UserContext from "./userContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Index from "./pages";

class App extends Component {

  render(){
    return (
      <UserProvider>
        <Router>
          <div className="App">
            <Header />

            <Switch>
              <Route exact path="/" component={Search} />
              <Route exact path="/saved" component={Saved} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route path="*" component={Index} /> 
            </Switch>

            <Footer />
          </div>
        </Router>
      </UserProvider>
    ); 
  }
}

export default App;
