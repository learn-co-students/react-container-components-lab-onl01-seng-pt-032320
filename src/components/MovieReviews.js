import React from 'react'


const MovieReviews = ({reviews}) => (
    <div className="review-list">
        {reviews.map(review => (
            <div className="review" key={review.display_title}>
                <img src={review.multimedia.src} alt={review.multimedia.display_title}></img>
                <header>
                    {review.headline}
                    <span className="author">by {review.byline}</span>
                </header>
                <blockquote>{review.summary_short}</blockquote>
            </div>
        ))}
    </div>
)

export default MovieReviews 