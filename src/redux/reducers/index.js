import {combineReducers}  from 'redux'
import filters from './filters';
import pizzaItems from './pizzaItems';
import cartItems from './cart'

const rootReducer = combineReducers({
  filters,
  pizzaItems,
  cartItems

});

export default rootReducer;
