import React from 'react'

const Review = ({
 display_title, mpaa_rating,headline
}) =>{
   return (
       <div key={headline} className="review">
           <h2>{display_title}</h2>
           <p>{mpaa_rating}</p>
       </div>
   ) 
}

const MovieReviews = ({ reviews }) =>{
   
    return(
    <div className= 'review-list'>
       {reviews.map(Review)} 
    </div>
    )
}

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews
