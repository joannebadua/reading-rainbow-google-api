// const db = require("../models");
const axios = require("axios");

// Defining methods for the booksController
module.exports = {
  googleBooks: function(title){
    // hit up/query google api for books by name in the back-end. send it to the react app.
    // this route is gonna do a cool thing, go to goole api, grab goods and shoot it to react app.
    // Similar to sneak extra stuff in the html to reference later (e.g. giphy game) to reference in an id later
    axios
    .get("https://www.googleapis.com/books/v1/volumes", {query: title})
      .then((results) =>{
        console.log(results)
        res.json(results.items)
      })
      .catch((err) => {
        console.log(err)
      });
  },
  findAll: function(req, res) {
    db.Book
      .find({})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    // save a book to the db
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
