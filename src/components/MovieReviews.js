// Code MovieReviews Here

import React from 'react'

const MovieReviews = ({reviews}) => (
    <div class="review-list">
        {reviews.map(review => review )}
    </div>
)

export default MovieReviews
