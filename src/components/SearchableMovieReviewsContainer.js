import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;
const SEARCH_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
+ `api-key=${NYT_API_KEY}` + `&query=`

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
    state = {
      searchWord: '',
      reviews: []
    };
  
    handleSearchInputChange = event =>
      this.setState({ searchWord: event.target.value });
  
    handleSubmit = event => {
      event.preventDefault();
  console.log(this.state.searchWord)
      fetch(SEARCH_URL + (this.state.searchWord))
        .then(res => res.json())
        .then(res => this.setState({ reviews: res.results }));
    };
  
    render() {
      return (
        <div className="searchable-movie-reviews">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="search-input">Search Movie Reviews</label>
            <input
              id="search-input"
              type="text"
              style={{ width: 200 }}
              onChange={this.handleSearchInputChange}
            />
            <button type="submit">Submit</button>
          </form>
          {typeof this.state.reviews === 'object' &&
            this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
          <MovieReviews reviews={this.state.reviews} />
        </div>
      );
    }
  }
  
  export default SearchableMovieReviewsContainer;
  