import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({
  label,
  size,
  handleChange,
  handleSubmit
}) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor='search-input'>{label}</label>
    <input id='search-input' type='text' style={{ width: size }} onChange={handleChange} />
    <button type='submit'>Submit</button>
  </form>
);

SearchInput.defaultProps = {
  label: 'Search',
  size: 300
}

SearchInput.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func
}

module.exports = SearchInput;
