import axios from "axios";

export default { 
    //loadBook all by firing off an axios call
    getBooks: function(title) {
        // /searchBook froum from server.js - one thing per route 
        // pasted http://localhost:3001/searchBook 
        return axios.post("http://localhost:3001/searchBook", { data:title });
    },
    //loadBook specific id
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    //delete book with specific id
    deleteBook: function(id) {
        return axios.get("/api/books/" + id);
}
}