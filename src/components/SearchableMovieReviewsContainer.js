import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'q8wamMSBA6FswbSOSAtYETsBAzWxM1do';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    constructor(){
        super()

        this.state ={
            searchTerm: "",
            query: []
        }
    }

    componentDidMount(){
        fetch(URL)
        .then(res => res.json())
        .then(movieData => this.setState({movies: movieData.movies}))
    }

    editSearchTerm = (e) =>{
        this.setState(searchTerm: e.target.value)
    }

    dynamicSearch = () =>{
        return this.state.query.filter(title => title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }

    render(){
        return(
            <div className="searchable-movie-reviews">
                <p>Search</p>
                <input type='text' value ={this.state.searchTerm} onChange ={this.editSearchTerm} placeholder ="Search for a review" />
                <br></br>
                <MovieReviews reviews={this.dynamicSearch} />
            </div>
        )
    }


    


}

export default SearchableMovieReviewsContainer;


