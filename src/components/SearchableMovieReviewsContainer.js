import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'IzgOXOPhMxbkNwDhyROjJOjdhidIvqp3';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {
    constructor(props) {
        super(props) 
            this.state = {
                reviews: [],
                searchTerm:""
            }
        }

        handleOnChange = event => {
            this.setState({
                searchTerm: event.target.value
            })
        }

        handleSubmit = (event) => {
            fetch(URL + `&query=${this.state.searchTerm}`)
            .then(response => response.json())
            .then(movieData => {
                this.setState({
                    reviews: movieData.results,
                })
            })
            event.preventDefault()
            event.target.reset()
        }

        render() {
            return (
                 <div className="searchable-movie-reviews">
                      <form onSubmit={this.handleSubmit}>
                           <input onChange={this.handleOnChange} type="search" />
                           <button type="submit">Search</button>
                      </form>
                      <MovieReviews reviews={this.state.reviews} />
                 </div>
            );
       }
        

}

export default SearchableMovieReviewsContainer;
