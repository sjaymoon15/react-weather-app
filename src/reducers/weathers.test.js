import reducer, { defaultState } from './weathers';
import { FETCH_WEATHERS, FETCH_WEATHERS_ERROR } from '../actions/types';
import { mockWeatherResponse, searchQueryMock } from '../utils/testMocks';
import { FETCH_WEATHERS_ERROR_MESSAGE } from '../utils/constants';

describe('weathers reducer', () => {
  it('should return the default state', () => {
    expect(reducer(undefined, {})).toEqual(defaultState);
  });

  it('should handle FETCH_WEATHERS', () => {
    expect(
      reducer(defaultState, {
        type: FETCH_WEATHERS,
        payload: mockWeatherResponse,
      })
    ).toEqual({
      ...defaultState,
      city: mockWeatherResponse.city,
      list: mockWeatherResponse.list,
    });
  });

  it('should handle FETCH_WEATHERS_ERROR', () => {
    const currentState = { error: '' };

    expect(
      reducer(currentState, {
        type: FETCH_WEATHERS_ERROR,
        payload: FETCH_WEATHERS_ERROR_MESSAGE,
      })
    ).toEqual({
      ...currentState,
      error: FETCH_WEATHERS_ERROR_MESSAGE,
      city: null,
      list: null,
    });
  });
});
