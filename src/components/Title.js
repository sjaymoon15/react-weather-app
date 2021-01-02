import React, { Component } from 'react';
import { Header, Message } from 'semantic-ui-react';

export default class Title extends Component {
  render() {
    const { city, error } = this.props;
    if (error) {
      return (
        <Message negative>
          <Message.Header>{error}</Message.Header>
        </Message>
      );
    } else {
      const header = city
        ? `Weather Information for ${city.name}, ${city.country}`
        : 'Another Weather App';
      return <Header as='h2' content={header} textAlign='center' />;
    }
  }
}
