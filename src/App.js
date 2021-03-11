import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import OrderPage from './pages/OrderPage';
import Home from './pages/Home';
import {fetchItems} from './redux/actions/pizzaItems'
import {useDispatch} from 'react-redux'

function App() {

  const pizzaUrl = '/pizza.json';

  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(fetchItems(pizzaUrl))
  },[dispatch])

  return (
    <>
      <Route path="/" component={Home} exact />
      <Route path="/order" component={OrderPage} exact />
    </>
  );
}

export default App;
