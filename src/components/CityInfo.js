import React, { Component } from 'react';
import { List, Header } from 'semantic-ui-react';

export default class CityInfo extends Component {
  render() {
    const { city } = this.props;
    const header = city
      ? `Weather Information for ${city.name}, ${city.country}`
      : 'Another Weather App';
    return <Header as='h2' content={header} textAlign='center' />;
  }
}
