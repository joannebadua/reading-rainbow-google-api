import axios from "axios";
import dotenv from "dotenv";

export default { 
    //loadBook all by firing off an axios call
    //getBooks receives instructions from Books.js. getBooks now will take the tilte
    // and do a post request living in the back end. app.post in server.js
    getBooks: function(title) {
        // /searchBook froum from server.js - one thing per route 
        // pasted http://localhost:3001/searchBook 
        return axios.post("http://localhost:3001/searchBook", { data:title });
    },
    //loadBook specific id
    saveBook: function(newBook) {
        return axios.post("/saveBook", newBook);
    },
    //add get all saved books - friday; in Saved.js getAll SavedBooks. This function needs to have a route
    getAllSavedBook: function(newBook) {
        return axios.get("/saveBook");
    },
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    //delete book with specific id
    deleteBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    // googleBooks: function(title) {
    //     //when we fire this axios off, runs to bookControllers passes the baton for it to do something.
    //     //disregard googleBooks bc we want to put the heavy lifting in the backend
    //     return axios.get(`https://www.googleapis.com/books/v1/volumes/?q=${title}` )
        
    // }
}