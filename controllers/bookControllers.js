const bookModel = require("../models/books.js");
const axios = require("axios");

// Defining methods for the booksController
module.exports = {
  googleBooks: function(title, callback){
    // hit up/query google api for books by name in the back-end. send it to the react app.
    // this route is gonna do a cool thing, go to goole api, grab goods and shoot it to react app.
    // Similar to sneak extra stuff in the html to reference later (e.g. giphy game) to reference in an id later
    axios
    .get(`https://www.googleapis.com/books/v1/volumes/?q=${title}`)
      .then((results) =>{
        // console.log(results)
        // res.json(results.items) //this would only be available if we have access to a route file
        // instead we do a callback
        callback(results.data.items);
        //results.items will be moved to server.js, we want it there so we can do res.json

      })
      .catch((err) => {
        console.log(err)
      });
  },
  findAll: function(cb) {
    // cb because ln 26 tells go to db to get all books
    //once get all books, ln. 30 .then get books, then shoot to front end
    //only server.js can take it tot he front end with code controller.findAll(function(data){ in server.js (whihc has the route)
    //with res.json(data) to get to front end
    db.Book
      .find({})
      .sort({ date: -1 })
      .then(dbModel => cb(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(newBook, cb) {
    // save a book to the db
    bookModel
      .create(newBook)
      .then((dbModel) => {
        // res.json(dbModel)
        cb(dbModel)})
      .catch(error => cb(error));
  },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
