import React from "react";
import Card from "../Card"
import format from "date-fns/format";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas, faSave, faTrashAlt, faEye, faCheck} from "@fortawesome/free-solid-svg-icons";

const Book = ({ id, book_id, user_id, index, action_button, action_callback, title, card_image, imageLinks, previewLink, canonicalVolumeLink, authors, publisher, publishedDate, categories, description, pageCount, averageRating, language}) => {
  let cat = categories ? categories.map(c => c.replace(/\//g,'')) : [];
  
  const renderButtons = (action, action_cb, link, i) => {
    if(!action_cb){ 
      action_cb = (params) => { 
        console.log(params); 
        console.log("Callback doesn't exist!");
      }; 
    }

    switch (action) {
      case "delete":
        return <div>
          <button onClick={(e) => window.open(e.target.getAttribute('data-link'), "_blank") } data-link={link} type="button" className="btn btn-light"><FontAwesomeIcon icon={faEye} /> View</button>
          <button onClick={() => action_cb(i) } type="button" className="btn btn-light"><FontAwesomeIcon icon={faTrashAlt} /> Delete</button>
        </div>

      case "saved":
        return <div>
          <button onClick={(e) => window.open(e.target.getAttribute('data-link'), "_blank") } data-link={link} type="button" className="btn btn-light"><FontAwesomeIcon icon={faEye} /> View</button>
          <button onClick={() => console.log(`Already saved book index ${i} in the database!`) } type="button" className="btn btn-light"><FontAwesomeIcon icon={faCheck} /></button>
        </div>
        
      default:
        return <div>
          <button onClick={(e) => window.open(e.target.getAttribute('data-link'), "_blank") } data-link={link} type="button" className="btn btn-light"><FontAwesomeIcon icon={faEye} /> View</button>
          <button onClick={() => action_cb(i) } type="button" className="btn btn-light"><FontAwesomeIcon icon={faSave} /> Save</button>
        </div>
    }
  };

  return (
    <Card 
      htag="h5" 
      heading={title}
      headingLink={previewLink}
      bg="light" 
      image={card_image}
    >
      <table className="table">
        <tbody>
          <tr id={`book_${id}`} data-book_id={book_id}>
            {imageLinks ? (
              <td className="book_image">
                <span className="image_wrap">
                  <a href={canonicalVolumeLink} target="_blank">
                    {imageLinks.hasOwnProperty("thumbnail") && <img src={imageLinks.thumbnail} alt={title} />}
                  </a>
                </span>
                {renderButtons(action_button, action_callback, previewLink, index)}
              </td>
            ) : "" }
            <td>
              {authors && <h6 className="card-subtitle text-muted">Authors: {authors.join(", ")} | Publisher: {publisher} | Published: {publishedDate && format(new Date(publishedDate), "PPP")}</h6>}
              {categories && <small>Categories: {cat.join(", ")}</small>}
              <p className="card-text">{description}</p>
              <small>Pages: {pageCount} | Rating: {averageRating} | Language: {language}</small>
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
};
export default Book;
