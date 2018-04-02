import React from "react";

export default function StarRating(props) {
  function genStarRating(rating) {
    let starRating = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        starRating.push(<span className="fas fa-star yellow-star" key={i} />);
      } else {
        starRating.push(<span className="fas fa-star gray-star" key={i} />);
      }
    }
    return starRating;
  }

  return <div className="rating">{genStarRating(props.rating)}</div>;
}
