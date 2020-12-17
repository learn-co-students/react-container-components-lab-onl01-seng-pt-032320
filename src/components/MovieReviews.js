import React from 'react'

const Review = ({ display_title, byline, multimedia, summary_short }) => {
    return (
            <div className="review" key={display_title}>
                <h3>{display_title}</h3>
                <img src={multimedia.src}></img>
                <p>{byline}</p>
                <p>{summary_short}</p>
            </div>
    )}

const MovieReviews = (props) => {
    const reviews = props.reviews.map(Review)
    return (
        <div className="review-list">
            { reviews }
        </div>
    )
}

export default MovieReviews
