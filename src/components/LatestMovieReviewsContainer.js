import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import Movie from './Movie'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            reviews: []
        };
    }

    componentDidMount() {
        fetch(URL)
            .then(res => res.json())
            .then(json => {
                //console.log(json)
                //debugger
                this.setState({
                    reviews: json.results
                })
            })
    }

    
    render() {
        return (
            <div className="latest-movie-reviews">
                <h1>Latest Reviews:</h1>
                <MovieReviews reviews={this.state.reviews}
                /* passing props to moviereviews? */
                /> 
            </div>
        )
    }
}

//passing props, key = reviews, value = (whats coming from state) this.state.reviews

export default LatestMovieReviewsContainer

//should render reviews after reviews state updated
//LatestMovieReviewsContainer_test.js:52:47
//   expect(wrapper.find('.review').length).to.equal(testReviews.length);

