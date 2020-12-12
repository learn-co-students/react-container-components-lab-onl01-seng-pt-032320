// Code MovieReviews Here
import React from 'react';

const MovieReviews = props => { 
     const { reviews } = props

     const styles = {
          fontWeight: "bold"
     }

     const reviewList = reviews.map((review, index) => {
          return (
               <li key={index}>
                    <div style={{marginBottom: "50px"}} className="review">
                         <p><span style={styles}>Display Title</span>: {review.display_title}</p>
                         <p><span style={styles}>Headline</span>: {review.headline}</p>
                    </div>
               </li>
          )
     })
     return (
          <ol className="review-list">
               {reviewList}
          </ol>
     );
}

export default MovieReviews;
