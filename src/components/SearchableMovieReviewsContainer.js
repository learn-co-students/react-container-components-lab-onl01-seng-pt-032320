import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      searchTerm: '',
      reviews: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount(){

  }

  handleSubmit(ev){
    const { searchTerm } = this.state;
    ev.preventDefault();
    fetch(BASE_URL.concat(searchTerm))
      .then(res => res.json())
      .then(res => this.setState({
        reviews: res.results
      }));

  }

  handleInputChange(ev){
    this.setState({
      searchTerm: ev.target.value
    })
  }

  render(){
    const { reviews } = this.state;

    return (
      <div className='searchable-movie-reviews'>
        <SearchInput
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <MovieReviews reviews={reviews} />
      </div>
    );
  }
}
