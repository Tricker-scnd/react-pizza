import React from 'react';
import { Link } from 'react-router-dom';

export default function EmptyOrder() {
  return (
    <div className="popup-basket--empty">
      <h4>
        Тут пусто... <br /> закажите что-нибудь
      </h4>

      <Link to="/">
        <div className="basket-actions--go-back">Вернутся назад</div>
      </Link>
    </div>
  );
}
