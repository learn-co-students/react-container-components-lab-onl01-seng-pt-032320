import React from 'react'

const Layout = ({
 display_title, mpaa_rating
}) =>{
   return (
       <div className='review'>
           <h2>{display_title}</h2>
           <p>{mpaa_rating}</p>
       </div>
   ) 
}

const MovieReview = ({reviews}) =>{
    <div className= 'review-list'>
       {reviews.map(Layout)} 
    </div>
}

MovieReview.defaultProps ={
    reviews: []
}

export default MovieReview
