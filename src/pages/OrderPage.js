import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import EmptyOrder from '../components/order/emptyOrder';
import Order from '../components/order/order';
import { useSelector, useDispatch } from 'react-redux';
import {clearCart} from '../redux/actions/cart'


const calcCartItems = (arr) =>{
 return arr.length ? 
  arr.reduce((acc,val)=>acc+val[1],0) 
  : 0
}


export default function OrderPage() {
  const popupRef = useRef(null);
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cartItems);
  let {totalPrice,totalCount} = cartItems
  totalCount=calcCartItems(Object.entries(totalCount))
  

  const clear = () => {
    dispatch(clearCart())
  };

  useEffect(() => {
    popupRef.current.classList.add('start-show');
    window.scrollTo( 0, 0 );
  },[]);



  const cartItemsArray = Object.entries(cartItems.items)

  return (
    <div className="popup" ref={popupRef}>
      <Link to="/" className="close-popup">
        &times;
      </Link>

      <div className="popup-container">
        <div className="popup-head">
          <Link to="/">
            <div className="logo">
              <h1>Your Pizza</h1>
            </div>
          </Link>
        </div>

        {totalCount ? <Order clearCart={clear} orderItems={cartItemsArray} orderInfo={{price:totalPrice,count:totalCount}}/> : <EmptyOrder />}
      </div>
    </div>
  );
}
