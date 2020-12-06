// Code MovieReviews Here
import React from 'react';


const MovieReviews = ({ reviews }) => (
    
<div className="review-list">
    
    { reviews.map((review, i) => 
    <li 
    className="review"
    key={i} 
    > 
    
    {review.headline} <br></br> By: {review.byline} 
    <blockquote>
    {review.summary_short}
    </blockquote>
    </li>
    )}
    
</div>

)

MovieReviews.defaultProps = {
    reviews: []
  };
  

export default MovieReviews;



//     byline: "Natalia Winkelman"
// critics_pick: 0
// date_updated: "2020-12-04 12:04:02"
// display_title: "Godmothered"
// headline: "‘Godmothered’ Review: Revising the Fairy Tale Formula"
// link: {type: "article", url: "http://www.nytimes.com/2020/12/04/movies/godmothered-review.html", suggested_link_text: "Read the New York Times Review of Godmothered"}
// mpaa_rating: "PG"
// multimedia: {type: "mediumThreeByTwo210", src: "https://static01.nyt.com/images/2020/12/05/arts/godmothered1/godmothered1-mediumThreeByTwo210.jpg", width: 210, height: 140}
// opening_date: "2020-12-04"
// publication_date: "2020-12-04"
// summary_short:
