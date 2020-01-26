const path = require('path');
module.exports = {
  Book: require(path.join(__dirname, "book")),
  User: require(path.join(__dirname, "user"))
};
