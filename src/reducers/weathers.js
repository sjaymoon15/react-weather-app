import { FETCH_WEATHERS } from '../actions/types';

const defaultState = {
  city: null,
  list: null,
};

const weathers = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_WEATHERS:
      return {
        ...state,
        city: action.payload.city,
        list: action.payload.list,
      };
    default:
      return state;
  }
};

export default weathers;
