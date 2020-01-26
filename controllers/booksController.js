const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.User.find({username: 'demo'})
    .then(dbModel => {
      db.Book.find({ 'user': { $eq: dbModel[0]._id, $exists: true, $ne: null }})
      .populate("user")
      .sort({
        date: -1
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    }).catch(err => res.status(422).json(err));      
  },

  findByTitle: function (req, res) {
    db.Book.find({
        title: req.params.title
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function (req, res) {
    db.Book.find({
        book_id: req.params.book_id
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function (req, res) {
    let { user_id } = req.body;
    delete req.body.user_id;
    req.body.user = user_id;

    if(req.body.user === 0 || !req.body.user){
      db.User.find({username: 'demo'})
      .then(dbModel => {
        req.body.user = dbModel[0]._id;

        db.Book.create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err))
      }).catch(err => res.status(422).json(err));
    }else{
      db.Book.create(req.body)
        .then(dbBook => db.User.findOneAndUpdate({ _id: user_id }, { $push: { book:dbBook._id } }, { new: true }))
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }

  },

  remove: function (req, res) {
    db.Book.findById({
        _id: req.params.id
      })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};