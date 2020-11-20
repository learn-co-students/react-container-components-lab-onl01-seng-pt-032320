import React from 'react';

const Review = ({
  headline,
  link,
}) => {
  return (
    <div
      key={headline}
      className="review"
    >
      <header>
        <a
          className="review-link"
          href={link.url}
        >
          {headline}
        </a>
      </header>

    </div>
  );
};

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

export default MovieReviews;