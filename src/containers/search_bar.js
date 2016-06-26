import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index.js';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    //Prevent form submission
    event.preventDefault();
    const splitTerm = this.state.term.split(',');
    //Make a call to a weather API
    this.props.fetchWeather(splitTerm[0],splitTerm[1]);
    this.setState({ term: ''});
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group search-bar">
        <input
          placeholder="Get a five-day forecast in your favorite cities!"
          className="form-control search-input"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn search-button">
          <button
            type="submit"
            className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
