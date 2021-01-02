import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';

import Search from '../components/Search';
import Weather from '../components/Weather';
import Title from '../components/Title';
import { fetchWeathers } from '../actions';

class Dashboard extends Component {
  render() {
    const { fetchWeathers, weathers } = this.props;
    return (
      <Container>
        <Search fetchWeathers={fetchWeathers} />
        <Segment>
          <Title city={weathers.city} error={weathers.error} />
          <Weather list={weathers.list} />
        </Segment>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weathers: state.weathers,
  };
};

export default connect(mapStateToProps, { fetchWeathers })(Dashboard);
