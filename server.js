/**
 * @package search-google-books
 * @subpackage express-server
 * @author Christopher Collins
 * @version 1.0.0
 */
/* ===============[ Dependencies  ]========================*/
require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const path = require("path");
const session = require("express-session");
const dbConnection = require("./models/db.js"); // Connects to db
const MongoStore = require('connect-mongo')(session)
const passport = require("./passport");
const PORT = process.env.PORT || 3001;
const app = express();

/* ===============[ Express Config ]=======================*/
// Use Features
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static assets from the "build" directory.
if (process.env.NODE_ENV === "production"){
  app.use(express.static(path.resolve(__dirname,"client/build")));
}

/* ===============[ Passport Session ]====================*/
// We need to use sessions to keep track of our user's login status
app.use(
  session({ 
    secret: "showmethemoney", 
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false, 
    saveUninitialized: false 
  })
);
app.use(passport.initialize());
app.use(passport.session());

  
/* ===============[ Add routes, both API and view ]========*/
const routes = require("./routes");
app.use(routes);

// Start the API server
app.listen(PORT, function(){
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});