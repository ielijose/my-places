import { combineReducers, createStore } from 'redux';
import { loadState, saveState } from '../utils/storage';
import placesReducer from './places/reducer';

const rootReducer = combineReducers({
  places: placesReducer,
});

const initialData = loadState();

const store = createStore(rootReducer, initialData);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
