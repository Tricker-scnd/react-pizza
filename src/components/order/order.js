import React from 'react';
import { Link } from 'react-router-dom';

export default function Order({clearBasket}) {
  return (
    <div className="popup-basket">
      <div className="popup-basket__row">
        <h5>
          <span className="basket-icon"></span>
          Корзина
        </h5>

        <button onClick={clearBasket} className="btn btn-basket--clear">
          <span>&times;</span> Очистить корзину
        </button>
      </div>

      <div className="popup-basket__item">
        <div className="popup-basket__item-img">
          <img src="/images/pizza_images/pizza_PNG7136-min.png" alt="" />
        </div>
        <div className="popup-basket__item-description">
          <div className="item-description__name">Пицца Сицилина</div>
          <div className="item-description__type">Тонкое тесто, 25 см.</div>
        </div>
        <div className="popup-basket__item-price-block">
          <div className="item-price-block__counter">
            <button className="btn-item--minus">-</button>
            <span>1</span>
            <button className="btn-item--plus">+</button>
          </div>
          <div className="item-price-block__price">9.99 $</div>
          <button className="btn btn-item--remove">&times;</button>
        </div>
      </div>

      <div className="popup-basket__item">
        <div className="popup-basket__item-img">
          <img src="/images/pizza_images/pizza_PNG7151-min.png" alt="" />
        </div>
        <div className="popup-basket__item-description">
          <div className="item-description__name">Пицца Вегетариана</div>
          <div className="item-description__type">Тонкое тесто, 30 см.</div>
        </div>
        <div className="popup-basket__item-price-block">
          <div className="item-price-block__counter">
            <button className="btn-item--minus">-</button>
            <span>1</span>
            <button className="btn-item--plus">+</button>
          </div>
          <div className="item-price-block__price">10.99 $</div>
          <button className="btn btn-item--remove">&times;</button>
        </div>
      </div>

      <div className="popup-basket__row bastket-result">
        <p className="bastket-result--count">
          Всего пицц: <b>2 шт.</b>
        </p>
        <p className="bastket-result--price">
          Сумма заказа: <span>30 $</span>
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
