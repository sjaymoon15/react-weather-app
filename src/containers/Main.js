import React, { Component } from 'react';
import { Container, Grid, Segment, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';

import Search from '../components/Search';
import Weather from '../components/Weather';
import CityInfo from '../components/CityInfo';
import { fetchWeathers } from '../actions';

class Main extends Component {
  render() {
    const { fetchWeathers, weathers } = this.props;
    return (
      <Container>
        <Search fetchWeathers={fetchWeathers} />
        <Segment>
          <CityInfo city={weathers.city} />
          <Weather list={weathers.list} />
        </Segment>
      </Container>
    );
  }
}

const mapStateToProps = ({ weathers }) => {
  return {
    weathers,
  };
};

export default connect(mapStateToProps, { fetchWeathers })(Main);
