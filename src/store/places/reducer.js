import { handleActions } from 'redux-actions';
import { addPlace, removePlace, setUserLocation } from './actions';

const defaultState = {
  places: [],
  userLocation: null,
};

const placesReducer = handleActions(
  {
    [addPlace]: (state, action) => ({
      ...state,
      places: [...state.places, action.payload],
    }),
    [removePlace]: (state, action) => ({
      ...state,
      places: [...state.places].filter((place) => place.id !== action.payload),
    }),
    [setUserLocation]: (state, action) => ({
      ...state,
      userLocation: action.payload,
    }),
  },
  defaultState,
);

export default placesReducer;
