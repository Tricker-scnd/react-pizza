import {combineReducers}  from 'redux'
import filters from './filters';
import pizzaItems from './pizzaItems';

const rootReducer = combineReducers({
  filters,
  pizzaItems,
});

export default rootReducer;
