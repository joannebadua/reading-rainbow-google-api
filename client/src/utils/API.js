import axios from "axios";
export default { 
    //loadBook all by firing off an axios call
    getBooks: function() {
        return axios.get("/api/books");
    },
    //loadBook specific id
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    //delete book with specific id
    deleteBook: function(id) {
        return axios.get("/api/books/" + id);
}