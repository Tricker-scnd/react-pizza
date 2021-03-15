import React from 'react';

export default function OrderItem({itemInfo,plusItem,minusItem,removeItem}) {
    const id = itemInfo[0]
    const [_,info] = Object.entries(itemInfo)[1]
    
  return (
<>

    {Object.keys(info).map((key)=>
    <div className="popup-basket__item" key={key+id}>
        <div className="popup-basket__item-img">
          <img src={`/images/pizza_images/${info[key].image}`} alt="" />
        </div>
        <div className="popup-basket__item-description">
          <div className="item-description__name">{info[key].name}</div>
          <div className="item-description__type">{`${key.split(';')[1]} тесто, ${key.split(';')[0]} см.`}</div>
        </div>
        <div className="popup-basket__item-price-block">
          <div className="item-price-block__counter">
            <button className="btn-item--minus" onClick={() => minusItem(id,key,info[key].count)}>-</button>
            <span>{info[key].count}</span>
            <button className="btn-item--plus" onClick={() => plusItem(id,key)}>+</button>
          </div>
          <div className="item-price-block__price">{info[key].count*info[key].price} $</div>
          <button className="btn btn-item--remove" onClick={() => removeItem(id,key,info[key].count)} >&times;</button>
        </div>
      </div>
      )}
      </>
  );
}
