import axios from "axios";

export default {
    getBook: function (query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    },

    // Delete a book with a given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id).then(result => result.data);
    },

    // Saves a book to the db
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData).then(result => result.data);
    },

    // Get a saved book from the database
    savedBooks: function () {
        return axios.get("/api/books").then(result => result.data);
    }
};