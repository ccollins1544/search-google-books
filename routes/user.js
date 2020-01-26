const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Book = require('../models/book');
const passport = require('../passport');

router.post('/', (req, res) => {
  console.log('user signup');

  const {username, password} = req.body
  
  // ADD VALIDATION
  User.findOne({
    username: username
  }, (err, user) => {
    if (err) {
      console.log('User.js post error: ', err)
    } else if (user) {
      res.json({
        error: `Sorry, already a user with the username: ${username}`
      })
    } else {
      const newUser = new User({
        username: username,
        password: password
      })
      newUser.save((err, savedUser) => {
        if (err) return res.json(err)
        res.json(savedUser)
      })
    }
  })
})

router.post(
  '/login',
  function (req, res, next) {
    console.log('routes/user.js, login, req.body: ');
    console.log(req.body)
    next()
  },
  passport.authenticate('local'),
  (req, res) => {
    console.log('logged in', req.user);
    var userInfo = {
      username: req.user.username
    };
    res.send(userInfo);
  }
)

router.get('/', (req, res, next) => {
  console.log('===== user!!======')
  console.log(req.user)
  if (req.user) {
    res.json({
      user: req.user
    })
  } else {
    res.json({
      user: null
    })
  }
})

router.get('/books/:user_id', (req, res) => {
  console.log('getting users books', req.params.user_id);
  Book.find({ 'user' : { $eq: req.params.user_id, $exists: true, $ne: null }})
    .populate("user")
    .sort({
      date: -1
    })
    .then(dbBooks => res.json(dbBooks))
    .catch(err => res.status(422).json(err));
})

router.post('/logout', (req, res) => {
  if (req.user) {
    req.logout()
    res.send({
      status: 200,
      msg: 'logging out'
    })
  } else {
    res.send({
      status: 203,
      msg: 'no user to log out'
    })
  }
})

module.exports = router