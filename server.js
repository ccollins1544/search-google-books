/**
 * @package search-google-books
 * @subpackage express-server
 * @author Christopher Collins
 * @version 1.0.0
 */
/* ===============[ Dependencies  ]========================*/
require("dotenv").config();
const express = require("express");
// const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const dbConnection = require("./models/db.js"); // Connects to db

/* ===============[ Express Config ]=======================*/
const PORT = process.env.PORT || 3001;
const app = express();

// Use Features
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static assets from the "build" directory.
if (process.env.NODE_ENV === "production"){
  app.use(express.static(path.resolve(__dirname,"client/build")));
}

/* ===============[ Connect to the MongoDB ]===============
mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || 
  "mongodb://localhost/google_books", 
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
  }
  );
*/
  
/* ===============[ Add routes, both API and view ]========*/
const routes = require("./routes");
app.use(routes);

// Start the API server
app.listen(PORT, function(){
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});