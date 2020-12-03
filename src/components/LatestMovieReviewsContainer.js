import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
// import MovieReview from './MovieReviews';

const NYT_API_KEY = 'q8wamMSBA6FswbSOSAtYETsBAzWxM1do';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
    constructor(){
        super()

        this.state = {
            reviews: []
        };
    }

    componentDidMount(){
        fetch(URL)
        .then(res => res.json())
        .then(movieData => this.setState({reviews: movieData.results}));
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <h2>Latest Reviews:</h2>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        );
    }

}

export default LatestMovieReviewsContainer;

