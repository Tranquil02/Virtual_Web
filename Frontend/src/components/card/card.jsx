import React from "react";

const Card = ({ artwork, index ,imageURL}) => {
  return (
    <article className="masonry-item card" key={index}>
      <img src={imageURL(artwork)} className="card__img" alt="" />
      <div className="card__info">
        <span className="card__category">category</span>
        <h3 className="card__title">{artwork.title}</h3>
        <span className="card__by">
          by{" "}
          <a href="#" className="card__author" title="author">
            {artwork.artist_title}
          </a>
        </span>
        <div className="card__clock-info">
          <i className="fas fa-clock"></i>
          <span className="card__time">time</span>
        </div>
      </div>
    </article>
  );
};

export default Card;
