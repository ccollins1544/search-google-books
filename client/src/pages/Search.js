import React, { useState, useEffect, useContext } from "react";
import API from "../utils/API";
import Wrapper from "../components/Wrapper";
import { SectionRow , Col } from "../components/Grid";
import Card from "../components/Card";
import Book from "../components/Book";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import UserContext from "../UserContext";

const Search = () => {
  const { user, getUser } = useContext(UserContext);
  const [ BookSearched, setBookSearched ] = useState("");
  const [ SearchResults, setSearchResults ] = useState(null);
  
  useEffect(() => {
    // getUser();

    API.searchBook(BookSearched)
      .then( res => res.json() )
      .then( json => { 
        const results = json.items.map(bk => ({ ...bk, saved: false }));
        console.log(results); 
        setSearchResults(results); 
      });
  }, [BookSearched]);

  const saveBook = (index) => {
    let { id, volumeInfo } = SearchResults[index];
    let { title, 
      authors, 
      publisher, 
      publishedDate, 
      description, 
      pageCount, 
      categories, 
      averageRating, 
      imageLinks, 
      language, 
      previewLink, 
      canonicalVolumeLink 
    } = volumeInfo;

    let bookData = {
      "book_id": id,
      "title": title,
      "authors": authors, 
      "publisher": publisher, 
      "published_date": publishedDate, 
      "description": description, 
      "page_count": pageCount, 
      "categories": categories, 
      "average_rating": averageRating, 
      "image_links": imageLinks, 
      "language": language, 
      "preview_link": previewLink, 
      "canonical_volume_link": canonicalVolumeLink 
    };

    console.log("BookData", bookData);
    API.getBook(bookData.book_id)
      .then(response => {
        console.log("Response", response.data.length)
        if(response.data.length === 0){
          API.saveBook(bookData)
            .then(res => {
              console.log("saved response", res)
            }).catch(err => console.log(err));
        }

        setSearchResults(prevState => {
          return prevState.map((bk, i) => ({...bk, saved: i===index ? true : false }));
        });

      }).catch(err => console.log(err));
  };

  return (
    <Wrapper className="App" id="main-container">
      <SectionRow id="main-section">
        <Col size="lg-12">
          <Card heading="Search Book" bg="dark">
            <form>
              <div className="form-group row">
                <div className="col-sm-12 input-group">
                  <input 
                    id="input_search"
                    name="input_search"
                    className="form-control"
                    style={{fontSize: "1.3em"}}
                    type="text"
                    value={BookSearched}
                    onChange={e => setBookSearched(e.target.value)}
                  />
                  <span className="input-group-btn">
                    <button 
                      className="btn btn-light ml-2"
                      type="button" 
                      onClick={(e) => {e.preventDefault(); setSearchResults(null) }} 
                    >
                      <FontAwesomeIcon icon={faTrash} /> Clear Results
                    </button>
                  </span>
                </div>
              </div>
            </form>
          </Card>
        </Col>
      </SectionRow>
      <SectionRow>
        <Col size="lg-12">
          {SearchResults && SearchResults.map((book, index) => {
            const { id, volumeInfo, saved} = book;
            return (
              <Book
                key={id}
                id={id}
                index={index}
                action_button={saved ? "saved" : "save"}
                action_callback={saveBook}
                title={volumeInfo.hasOwnProperty("title") ? volumeInfo.title : "" }
                authors={volumeInfo.hasOwnProperty("authors") ? volumeInfo.authors : "" }
                publisher={volumeInfo.hasOwnProperty("publisher") ? volumeInfo.publisher : "" }
                publishedDate={volumeInfo.hasOwnProperty("publishedDate") ? volumeInfo.publishedDate : "" }
                description={volumeInfo.hasOwnProperty("description") ? volumeInfo.description : "" }
                pageCount={volumeInfo.hasOwnProperty("pageCount") ? volumeInfo.pageCount : "" }
                categories={volumeInfo.hasOwnProperty("categories") ? volumeInfo.categories : "" } // array
                averageRating={volumeInfo.hasOwnProperty("averageRating") ? volumeInfo.averageRating : "" }
                imageLinks={volumeInfo.hasOwnProperty("imageLinks") ? volumeInfo.imageLinks : "" } // Array: smallThumbnail, thumbnail, small, medium, large, extraLarge
                language={volumeInfo.hasOwnProperty("language") ? volumeInfo.language : "" }
                previewLink={volumeInfo.hasOwnProperty("previewLink") ? volumeInfo.previewLink : "" } // books.google.com/store/books/
                canonicalVolumeLink={volumeInfo.hasOwnProperty("canonicalVolumeLink") ? volumeInfo.canonicalVolumeLink : "" } // play.google.com/store/books/
              />
            );
          })}
        </Col>
      </SectionRow>
    </Wrapper>
  );
};

export default Search; 