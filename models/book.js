const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({  
  book_id: {
    type: String,
    required: true
  },
  title: { 
    type: String, 
    required: true 
  },
  authors: [
    { 
      type: String, 
      required: true 
    }
  ],
  publisher: String,
  published_date: String,
  description: String,
  page_count: Number,
  categories: [{type: String}],
  average_rating: mongoose.Decimal128,
  image_links: [
    {
      thumbnail: String,
      smallThumbnail: String, 
      small: String, 
      medium: String, 
      large: String, 
      extraLarge: String
    }
  ],
  language: String,
  preview_link: String,
  canonical_volume_link: String,
  date: { 
    type: Date, 
    default: Date.now 
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
