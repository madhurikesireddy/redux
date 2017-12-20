import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Suggest from 'react-autosuggest';
import * as actions from './actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSuggest = this.handleSuggest.bind(this);
  }

  handleChange(e, { newValue }) {
    this.props.dispatch(actions.setKeyword(newValue));
  }

  handleSuggest({ value }) {
    this.props.dispatch(actions.fetchSuggests(value));
  }

  render() {
    const { search: { suggests, keyword } } = this.props;
    const props = {
      value: keyword,
      onChange: this.handleChange
    };
    return (
      <div>
        <h1>DropDown!</h1>
        <Suggest
          suggestions={suggests}
          onSuggestionsUpdateRequested={this.handleSuggest}
          renderSuggestion={s => <span>{s.name}</span>}
          getSuggestionValue={s => s.name}
          inputProps={props}
        />
      </div>
    );
  }
}

function select(state) {
  const { app, search } = state;
  return { app, search };
}

export default connect(select)(App);
