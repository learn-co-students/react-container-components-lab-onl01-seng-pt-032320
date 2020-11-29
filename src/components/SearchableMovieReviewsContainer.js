import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
            `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
    state = {
        query: '',
        reviews: []
    }

    handleChange = event => {
        this.setState({
            query: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()

        fetch(URL.concat(this.state.query))
        .then(response => response.json())
        .then(reviews => {
            this.setState({
                reviews: reviews.results
            })
            console.log(reviews)
        })
    }


    render() {
        return (
            <div className="searchable-movie-reviews">
                Search Movie Reviews
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} value={this.state.query}></input>
                    <input type="submit"></input>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
    
}

export default SearchableMovieReviewsContainer