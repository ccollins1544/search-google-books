import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Wrapper from "../components/Wrapper";
import { SectionRow , Col } from "../components/Grid";
import Book from "../components/Book";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
// const mongoose = require("mongoose");

const Saved = () => {
  const [ books, setBooks ] = useState([]);
  
  useEffect(() => {
    API.getBooks()
    .then( res => res.json() )
    .then( json => setBooks(json));
    // .then( json => { console.log(json); setBooks(json); });
  }, []);

  const deleteBook = (index) => {
    let { _id } = books[index];

    API.deleteBook(_id)
      .then(() => (API.getBooks()))
      .then( res => res.json() )
      .then( json => setBooks(json))
      .catch(err => console.log(err));
  };

  return (
    <Wrapper className="App" id="main-container">
      <SectionRow id="main-section">
        <Col size="lg-12">
          {books.length > 0 && books.map((book, index) => {
            const { _id, book_id, title, authors, publisher, published_date, description, page_count, categories, average_rating, image_links, language, preview_link, canonical_volume_link} = book;
            return (
              <Book
                key={_id}
                id={_id}
                book_id={book_id}
                index={index}
                action_button="delete"
                action_callback={deleteBook}
                title={title}
                authors={authors}
                publisher={publisher}
                publishedDate={published_date}
                description={description}
                pageCount={page_count}
                categories={categories}
                averageRating={average_rating.hasOwnProperty("$numberDecimal") ? parseFloat(average_rating.$numberDecimal) : ""}
                imageLinks={image_links.length > 0 ? image_links[0] : []}
                language={language}
                previewLink={preview_link}
                canonicalVolumeLink={canonical_volume_link}
              />
            );
          })}
        </Col>
      </SectionRow>
    </Wrapper>
  );
};

export default Saved; 