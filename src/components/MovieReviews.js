// Code MovieReviews Here
import React from 'react'

    const MovieReviews = (props) => { 
        //console.log(props)
        
        //ask how to make keys here

        const movieList = props.reviews.map((review, index) => {
            return (
                <div className="review">
                    <ol>
                        <h2>Review {index + 1}: </h2>
                        <img src={review.multimedia.src} />
                        <br />
                        <h4>Movie Title: {review.display_title}</h4>
                        <h4>Movie Rating: {review.mpaa_rating} </h4>
                        <h4>Movie Review (critics): {review.critics_pick}</h4>
                        <h4>Movie Review (byline): {review.byline}</h4>
                        <h4>Movie Summary: {review.summary_short}</h4>
                    </ol>
                </div>
            )
        }
    )
       

    return(
        <div className="review-list">
            {movieList}
        </div>
    )
    }

export default MovieReviews

//individual movie
//prop.movies iterate and render a collection of movie componenets
