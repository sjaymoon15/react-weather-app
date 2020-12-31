import React, { Component } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

export default class Weather extends Component {
  render() {
    const { list } = this.props;
    return (
      <ResponsiveContainer width='100%' aspect={2}>
        <LineChart data={list} margin={{ bottom: 5 }}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='dt_txt' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            dataKey='main.pressure'
            stroke='#8f2d56'
            name='Pressure (hPa)'
          />
          <Line dataKey='main.humidity' stroke='#d81159' name='Humidity (%)' />
          <Line dataKey='main.temp' stroke='#006ba6' name='Temperature (F)' />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}