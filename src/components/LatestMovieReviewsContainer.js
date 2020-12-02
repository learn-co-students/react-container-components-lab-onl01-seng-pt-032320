import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      reviews: []
    }
  }

  componentWillMount(){
    fetch(URL)
      .then(res => res.json())
      .then(res => this.setState({
        reviews: res.results
      }));
  }

  render(){
    const { reviews } = this.state;

    return (
      <div className='latest-movie-reviews'>
        <h2>The Latest Movie Revies</h2>
        <MovieReviews reviews={reviews} />
      </div>
    );
  }
}
