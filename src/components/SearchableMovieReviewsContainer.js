import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

//MAKE SEARCH FORM

class SearchableMovieReviewsContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchTerm: '',
            reviews: []
        };
    }

   
    handleOnChange = (event) => {
        this.setState ({
            searchTerm: event.target.value
        })
        //this.props.onChange(event.target.value)
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        //console.log("did i get here")

        fetch(URL)
        .then(res => res.json())
        .then(json => {
            //const movieData =
            //console.log(json)
            //debugger
            //coming up as an empty array
            // const filteredReviews = 
            //     json.results.filter(rev => {
            //         rev.summary_short.includes(this.state.searchTerm)
            //     })
         
                    //filtered review ... with the .target.value of teh search
            //console.log(filteredReviews)
            this.setState({
                reviews: json.results
            })
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input 
                        type="text"
                        placeholder="Search"
                        value={this.state.searchTerm}
                        onChange={this.handleOnChange}
                    />
                    <button type="Submit">Submit</button>
                </form>
                <MovieReviews reviews={this.state.reviews} /> 
                {/* MovieReviews reviews renders reviews after reviews state updated */}

            </div>
        )
    }
}

export default SearchableMovieReviewsContainer

