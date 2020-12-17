import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`

const newURL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}` + '&query='

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
        fetch(newURL.concat(this.state.searchTerm))
          .then(res => res.json())
          .then(response => 
            this.setState({ reviews: response.results })
          );
    }

    handleSearch = (e) => {
      this.setState({searchTerm: e.target.value })
    }
   
    render() {
        return (
        <div class="searchable-movie-reviews">
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleSearch}></input>
                <button type="submit">Submit</button>
            </form>

        <MovieReviews reviews={this.state.reviews} />
        </div>
        )
    }
  }

  export default SearchableMovieReviewsContainer