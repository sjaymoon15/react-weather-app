import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchWeathers } from '../actions';
import searchStyles from '../styles/searchStyles.module.css';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  handleFormSubmit = () => {
    console.log(this.state.searchQuery);
    this.props.fetchWeathers(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <div className={searchStyles.searchContainer}>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Input
            fluid
            action='Search'
            placeholder='Enter City'
            value={this.state.searchQuery}
            onChange={this.handleInputChange}
          />
        </Form>
      </div>
    );
  }
}

export default connect(null, { fetchWeathers })(Search);
