import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeathers } from '../actions';

class Main extends Component {
  componentDidMount() {
    this.props.fetchWeathers('dallas');
  }

  render() {
    return <div>Main</div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    weathers: state.weathers,
  };
};

export default connect(mapStateToProps, { fetchWeathers })(Main);
