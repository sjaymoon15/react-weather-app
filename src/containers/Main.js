import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';

import Search from './Search';

class Main extends Component {
  render() {
    return (
      <Container>
        <Search />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    weathers: state.weathers,
  };
};

export default connect(mapStateToProps)(Main);
