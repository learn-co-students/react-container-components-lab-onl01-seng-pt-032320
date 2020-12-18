import React from 'react';
 
const MovieReviews = (reviews) => (
  <div className="review-list">
  {reviews.reviews.map(r => <div className="review"><p>Title: {r.display_title}</p></div>)}
  </div>
)

export default MovieReviews;