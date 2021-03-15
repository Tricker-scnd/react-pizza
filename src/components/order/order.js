import React from 'react';
import { Link } from 'react-router-dom';
import OrderItem from './orderItem';
import { useDispatch } from 'react-redux';
import { minusCount, plusCount, deleteItem } from '../../redux/actions/cart';

export default function Order({ clearCart, orderItems, orderInfo }) {
  const dispatch = useDispatch();

  const plusItem = (id, key) => {
    dispatch(plusCount(id, key));
  };
  const minusItem = (id, key, count) => {
    if (count > 1) {
      dispatch(minusCount(id, key));
    }
  };
  const removeItem = (id, key, count) => {
    dispatch(deleteItem(id, key, count));
  };

  return (
    <div className="popup-basket">
      <div className="popup-basket__row">
        <h5>
          <span className="basket-icon"></span>
          Корзина
        </h5>

        <button onClick={clearCart} className="btn btn-basket--clear">
          <span>&times;</span> Очистить корзину
        </button>
      </div>

      {orderItems.map((item, i) => (
        <OrderItem
          itemInfo={item}
          key={'orditem' + i}
          plusItem={plusItem}
          minusItem={minusItem}
          removeItem={removeItem}
        />
      ))}

      <div className="popup-basket__row bastket-result">
        <p className="bastket-result--count">
          Всего пицц: <b>{orderInfo.count} шт.</b>
        </p>
        <p className="bastket-result--price">
          Сумма заказа: <span>{orderInfo.price} $</span>
        </p>
      </div>
      <div className="popup-basket__row basket-actions">
        <Link to="/">
          <div className="basket-actions--go-back">Вернутся назад</div>
        </Link>
        <button className="basket-actions--pay-now">Оплатить сейчас</button>
      </div>
    </div>
  );
}
