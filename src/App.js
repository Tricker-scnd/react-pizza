import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import OrderPage from './pages/OrderPage';
import Home from './pages/Home';
import { fetchItems } from './redux/actions/pizzaItems';
import { useDispatch } from 'react-redux';
import {PIZZA_ITEMS_URL} from './helpers/filterUrlCreator'



function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems(PIZZA_ITEMS_URL));
  }, [dispatch]);


  return (
    <>
      <Route path="/" component={Home} exact />
      <Route path="/order" component={OrderPage} exact />
    </>
  );
}

export default App;
