import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {

    constructor() {
        super();

        this.state = {
            reviews: [],
            searchTerm: ""
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(response => response.json())
        .then(movieData => this.setState({ reviews: movieData.results }))
    }

    searchInput = event => {
        this.setState({
            searchTerm: event.target.value 
        })
    }

    render() {
        return <div className="searchable-movie-reviews">/> 
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.searchInput}/>
                <button type="submit">Submit</button>
            </form>
            { this.state.reviews.length > 0 ? (<MovieReviews reviews={this.state.reviews} /> ) : null }
         </div>
    }
}
 
export default SearchableMovieReviewsContainer
