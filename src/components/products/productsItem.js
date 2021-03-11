import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SizeInput, DoughInput } from './filter/inputs';

function ProductsItem({ info }) {
  const [activeSize, setActiveSize] = useState(0);
  const [activeDough, setActiveDough] = useState(0);

  const { doughTypes } = info;

  const addPizza = () => {
    console.log(
      'Pizza added, размер:',
      info.size[activeSize],
      ' тесто:',
      doughTypes[activeDough].label,
    );
  };

  const currency = '$';
  return (
    <div className="product-list__item">
      <div className="product-list__item-img-wrapper">
        <img src={'./images/pizza_images/' + info.image} alt="" />
      </div>
      <div className="product-list__item-desctription">
        <h4>{info.name}</h4>
        <p className="product-list__item-desctription--text">{info.description}</p>
        <div className="product_chose-list">
          <div className="chose-list__row">
            {info.dough.map((s, i) => (
              <DoughInput
                val={doughTypes[i].label}
                i={i}
                setActiveDough={setActiveDough}
                active={activeDough === i}
                key={`${s}_${i}`}
              />
            ))}
          </div>
          <div className="chose-list__row">
            {info.size.map((s, i) => (
              <SizeInput
                val={s}
                i={i}
                setActiveSize={setActiveSize}
                active={activeSize === i}
                key={`${s}_${i}`}
              />
            ))}
          </div>
        </div>
        <div className="product-list__item-actions">
          <div className="product__price">
            <span>{info.price + ' ' + currency}</span>
          </div>
          <button onClick={addPizza} className="btn product__add-item">
            <p>Добавить</p>
            <span>0</span>
          </button>
        </div>
      </div>
    </div>
  );
}

ProductsItem.propTypes = {
  info: PropTypes.object.isRequired,
};

ProductsItem.defautProps = {
  info: {
    name: '...',
    description: '...',
    image: 'pizza_PNG7136-min.png',
    price: 0,
    type: [],
    size: [25, 30, 40],
    dough: [1, 2],
    popular: 0,
  },
};
export default ProductsItem;
