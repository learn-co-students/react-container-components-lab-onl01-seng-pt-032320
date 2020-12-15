import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends React.Component {
    constructor(props) {
      super(props)
   
      this.state = {
        reviews: [],
        searchTerm: ""
      };
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState((previousState) => {
            const newReview = previousState.reviews.filter(r=> r.name === e.target.value)
            return {
                reviews: newReview
            }
        })
        
    }
   
    fetchMovie = () => {
      fetch(URL)
        .then(response => response.json())
        .then(movieData => this.setState({ reviews: movieData.reviews }))
    }
   
    render() {
        return (
        <div class="searchable-movie-reviews">
            <form onSubmit={this.fetchMovie}>
                <input type="text"></input>
                <input type="submit" value="" onClick={this.handleSubmit}>Submit</input>
            </form>

        <MovieReviews reviews={this.state.reviews} />
        </div>
        )
    }
  }

  export default SearchableMovieReviewsContainer