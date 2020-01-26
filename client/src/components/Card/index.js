import React from "react";

function Card({ id, bg, htag, heading, headingLink, image, children}) {

  const renderHeading = (tag, text, link) => {
    switch (tag) {
      case "h1":
        return link !== undefined ? <a href={link} target="_blank"><h1>{heading}</h1></a> : <h1>{heading}</h1>;
      case "h3":
        return link !== undefined ? <a href={link} target="_blank"><h3>{heading}</h3></a> : <h3>{heading}</h3>;
      case "h4":
        return link !== undefined ? <a href={link} target="_blank"><h4>{heading}</h4></a> : <h4>{heading}</h4>;
      case "h5":
        return link !== undefined ? <a href={link} target="_blank"><h5>{heading}</h5></a> : <h5>{heading}</h5>;
      case "h6":
        return link !== undefined ? <a href={link} target="_blank"><h6>{heading}</h6></a> : <h6>{heading}</h6>;
      default:
        return link !== undefined ? <a href={link} target="_blank"><h2>{heading}</h2></a> : <h2>{heading}</h2>;
    }
  }

  return (
    <div className={["card", `${bg ? "bg-" + bg : ""}`].join(" ")} id={`card_${id}`}>
      {heading && <div className="card-header">{renderHeading(htag, heading, headingLink)}</div>}
      {image && <img className="card-img-top" src={image} alt={heading} />}
      <div className={["card-body", `${bg ? "bg-" + bg : ""}`].join(" ")}>{children}</div>
    </div>
  );
}

export default Card;