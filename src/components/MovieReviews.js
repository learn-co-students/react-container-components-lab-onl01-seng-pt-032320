import React from 'react'

 const Review = ({headline, byline, link, summary_short}) => {
    return (
        <div key={headline} className="review">
            <header>
                {headline}<br />
                by 
                <span className="review-author"> {byline}</span><br />
            </header>
            <blockquote>{summary_short}</blockquote>
            <a className="review-link" href={link.url}>Read Full Review Here</a><br />
        </div>
    )
}

const MovieReviews = ({ reviews }) => <div className='review-list'>{reviews.map(Review)}</div>

export default MovieReviews