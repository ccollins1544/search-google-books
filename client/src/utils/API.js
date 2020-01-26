import axios from "axios";

export default {
  user: () => axios.get('/user'),
  register: registerData => axios.post('/user', registerData),

  login: loginData => axios.post('/user/login', loginData),
  logout: () => axios.post('/user/logout'),

  // Gets all books
  // getBooks: () => axios.get("/api/books"),
  getBooks: () => fetch(`/api/books`),
  getUsersBooks: user_id => axios.get("/user/books/" + user_id),

  // Gets the book with the given title
  getBook: book_id => axios.get("/api/books/" + book_id),

  // Deletes the book with the given id
  deleteBook: id => axios.delete("/api/books/" + id),

  // Saves a book to the database
  saveBook: bookData => axios.post("/api/books", bookData),

  // Search a book from Google Books API
  // searchBook: bookTitle => axios.get("/api/search/" + bookTitle)
  searchBook: bookTitle => fetch("/api/search/" + encodeURIComponent(bookTitle))
};
