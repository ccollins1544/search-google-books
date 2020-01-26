import React, { Component } from "react";
import { Redirect, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab, faGoogle} from "@fortawesome/free-brands-svg-icons";
import { fas, faBook, faUser, faUserSlash , faUserPlus} from "@fortawesome/free-solid-svg-icons";
import "./style.css";

class Header extends Component {
  /*
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this)
  }
  */

  logout(event) {
    event.preventDefault()
    console.log('logging out')

    /*
    // axios.post('/user/logout').then(response => {
    API.logout().then(response => {  
      console.log("api.logout", response.data)
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          username: null
        })
      }
    }).catch(error => {
      console.log('Logout error')
    })
    */
  }

  render() {
    /*
    const loggedIn = this.props.loggedIn;
    console.log("loggedIn",loggedIn);
    console.log('navbar render, props: ')
    console.log(this.props);

    const default_style = {
      borderBottomColor: "#52616B",
      boxShadow: "0px 2px 4px 0px #52616B"
    };
  
    const winning_style = {
      borderBottomColor: "#28a745", 
      boxShadow: "0px 2px 4px 0px #28a745"
    };
  
    const losing_style = {
      borderBottomColor: "#E9290F", 
      boxShadow: "0px 2px 4px 0px #E9290F"
    };
  
    let game_alert = this.props.score > 0 ? "success" : ( this.props.highScore === this.props.score ? "" : "fail" );
    */

    return (
      <header className="App-header" id="nav-container">
        <div className="container-fluid clearfix" >
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="main-nav" >
            <Link className="navbar-brand mb-0 h1" to="."><FontAwesomeIcon icon={faGoogle} /> Search Google Books</Link>
            <div className="navbar-collapse collapse show">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/saved" className="nav-link"><FontAwesomeIcon icon={faBook} /> Saved</Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link"><FontAwesomeIcon icon={faUser} /> Login</Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="nav-link"><FontAwesomeIcon icon={faUserPlus} /> Sign Up</Link>
                </li>
                <li className="nav-item">
                  <Link to="/#" className="nav-link" onClick={this.logout}><FontAwesomeIcon icon={faUserSlash} /> Logout</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
