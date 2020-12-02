// Code MovieReviews Here
import React from 'react';

const renderReview = ({
  headline,
  byline,
  link,
  summary_short
}) => (
  <div key={headline} className='review' >
    <header>
      <a className='review-link' href={link.url}>
        {headline}
      </a>
      <br/>
      <span className='author'>{byline}</span>
    </header>
  </div>
);

const MovieReviews = ({ reviews }) => {
  return (
    <div className='review-list'>
      {
        reviews.map(renderReview)
      }
    </div>
  );
}

MovieReviews.defaultProps = {
  reviews: []
}

module.exports = MovieReviews;
