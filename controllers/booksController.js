const db = require("../models");

// booksController methods
module.exports = {

  findAll: function(req, res) {
      
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.error(err)
        res.status(422).json(err)
      });
  },

  findById: function(req, res) {

    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.error(err)
        res.status(422).json(err)
      });
  }