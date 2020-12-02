import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
// import MovieReview from './MovieReviews';

const NYT_API_KEY = 'q8wamMSBA6FswbSOSAtYETsBAzWxM1do';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component {
    constructor(){
        super()

        this.state ={
            movies: []
        }
    }

    componentDidMount(){
        fetch(URL)
        .then(res => res.json())
        .then(movieData => this.setState({movies: movieData.movies}))
    }

    render(){
        return(
            <div className="latest-movie-reviews">
                <h2>Latest Reviews</h2>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }


    


}

export default LatestMovieReviewsContainer;

