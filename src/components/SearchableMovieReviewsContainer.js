import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'cpLRwTF9c8x2CYIVgleXxg8fR0FcBdIA';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

 class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ""
    }

    handleSearchChange = event => this.setState({searchTerm: event.target.value})

    handleSubmit = event => {
        event.preventDefault()

        fetch(URL.concat(this.state.searchTerm))
        .then(response => response.json())
        .then(reviewData => {
            this.setState({
                reviews: reviewData.results
            })
        })
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="search-input">Input Search Query Here</label>
                    <input className="search" type="text" onChange={this.handleSearchChange} />
                    <input type="submit" value="Submit" />
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
