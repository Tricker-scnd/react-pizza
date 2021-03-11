import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import EmptyOrder from '../components/order/emptyOrder';
import Order from '../components/order/order';

export default function OrderPage() {
  const popupRef = useRef(null);

  const [emptyOrder, setEmptyOrder] = useState(false);

    const clearBasket = () => {
        setEmptyOrder(true)
       
    }

  useEffect(() => {
    popupRef.current.classList.add('start-show');
  });

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

        {emptyOrder ? <EmptyOrder /> : <Order clearBasket={clearBasket} />}
      </div>
    </div>
  );
}
