import { FETCH_WEATHERS, FETCH_WEATHERS_ERROR } from './types';
import {
  FETCH_WEATHER_ERROR_MESSAGE,
  WEATHER_API_ROOT_URL,
} from '../utils/constants';
import axios from 'axios';

export const fetchWeathers = (searchQuery) => async (dispatch) => {
  try {
    const url = `${WEATHER_API_ROOT_URL}&q=${searchQuery}`;
    const response = await axios.get(url);
    dispatch({ type: FETCH_WEATHERS, payload: response.data });
  } catch (error) {
    dispatch({
      type: FETCH_WEATHERS_ERROR,
      payload: FETCH_WEATHER_ERROR_MESSAGE,
    });
  }
};
