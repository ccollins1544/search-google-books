import React, { useState, useEffect, useContext } from "react";
import API from "../utils/API";
import Wrapper from "../components/Wrapper";
import { SectionRow , Col } from "../components/Grid";
import Book from "../components/Book";
import UserContext from "../userContext";

const Saved = () => {
  const { userState, getUser } = useContext(UserContext);
  const [ books, setBooks ] = useState([]);
  
  useEffect(() => {
    if(userState.user_id === 0 || !userState.user_id ){
      getUser();
    }

    if(userState.user_id !== 0){
      // console.log('get user books');
      API.getUsersBooks(userState.user_id)
      .then( response => response.data )
      .then( json => setBooks(json));
    }else{
      // console.log('get demo books', userState);
      API.getBooks()
      .then( res => res.json() )
      .then( json => setBooks(json));
    }

  }, []);

  const deleteBook = (index) => {
    let { _id } = books[index];
    let { user_id } = userState;

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
                user_id={userState.user_id}
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
                averageRating={!average_rating ? "" : (average_rating.hasOwnProperty("$numberDecimal") ? parseFloat(average_rating.$numberDecimal) : "")}
                imageLinks={!image_links ? [] : (image_links.length > 0 ? image_links[0] : [])}
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