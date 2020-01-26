import React, { Component, useContext } from "react";
import { Redirect, Route, Link } from "react-router-dom";
import UserContext from "../../UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab, faGoogle} from "@fortawesome/free-brands-svg-icons";
import { fas, faBook, faUser, faUserSlash , faUserPlus} from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const Header = () => {
  const { user, handleLogout} = useContext(UserContext);

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
              {user.loggedIn ? (
                <li className="nav-item">
                  <Link to="/#" className="nav-link" onClick={(e) => handleLogout(e)}><FontAwesomeIcon icon={faUserSlash} /> {user.username}</Link>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link"><FontAwesomeIcon icon={faUser} /> Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/signup" className="nav-link"><FontAwesomeIcon icon={faUserPlus} /> Sign Up</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
