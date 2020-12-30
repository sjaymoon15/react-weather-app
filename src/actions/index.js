import { FETCH_WEATHERS } from './types';
import { WEATHER_API_ROOT_URL } from '../utils/constants';
import axios from 'axios';

export const fetchWeathers = (searchQuery) => async (dispatch) => {
  try {
    const url = `${WEATHER_API_ROOT_URL}&q=${searchQuery}`;
    const response = await axios.get(url);
    dispatch({ type: FETCH_WEATHERS, payload: response.data });
  } catch (error) {
    // TODO
  }
};
