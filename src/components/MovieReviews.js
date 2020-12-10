import React from 'react';
 
const MovieReviews = ({reviews}) => (
    <div className="review-list">
        { reviews.map( (review, i) => <div className="review" key={i}> {review.display_title} </div>) }
    </div>
)
 
export default MovieReviews;