// Code MovieReviews Here
import React from 'react'

const pushMovie = (movie) => {
    return(
    <p className="review">{movie.display_title}</p>
    )
}
const MovieReviews = ({reviews}) => {
    console.log(reviews);
    console.log({reviews});
    return(
    <div className="review-list">
     {reviews.map(movie => pushMovie(movie))}
    </div>
   )
}

export default MovieReviews