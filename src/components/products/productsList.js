import React, { useEffect, useRef } from 'react';
import ProductsItem from './productsItem';
import Filter from './filter/filter';

import {useDispatch, useSelector} from 'react-redux'
import {setCategory, setSortBy} from '../../redux/actions/filters'


function ProductsList() {

  
  const dispatch = useDispatch()

  const itemList = useSelector(state=>state.pizzaItems.items)
  const itemsLoader = useSelector(state=>state.pizzaItems.loader)

  const activeCategory = useSelector(state=>state.filters.activeCategory)
  const activeType = useSelector(state=>state.filters.activeType)

  const itemsRef = useRef(null);


  useEffect(() => {
    const itemsAppear = setInterval(() => {
      if (window.pageYOffset > 470) {
        itemsRef.current.classList.add('start-show');
        clearInterval(itemsAppear);
      }
    }, 1000);

    return () => clearInterval(itemsAppear);
  }, []);


  const categories = [
    { type: 'Все', category: 'Все' },
    { type: 'Мясная', category: 'Мясные' },
    { type: 'Вегетарианская', category: 'Вегетарианские' },
    { type: 'Гриль', category: 'Гриль' },
    { type: 'Острая', category: 'Острые' },
    { type: 'Закрытая', category: 'Закрытые' },
  ];
  const types = [
    { type: 1, label: 'Популярности' },
    { type: 2, label: 'Цене' },
  ];
  const doughTypes = [
    { type: 1, label: 'Тонкое' },
    { type: 2, label: 'Стандартное' },
  ];

  const info = {
    categories,
    types,
    doughTypes,
    activeCategory,
    activeType
  }

  const changeType = (val) => {
    dispatch(setSortBy(val))
  }
  const changeCategory = (val) => {
    dispatch(setCategory(val))
  }

  return (
    <section ref={itemsRef} className="section-outer section-product-list">
      <div className="inner-wrapper">
        <Filter state={info} actions={[changeType, changeCategory]} />
        <div className="product-list__container">
          <h3>
            {categories.map((c) => {
              if (c.type === activeCategory) {
                if (c.type === 'Все') return `Все пиццы`;
                return `${c.type} пицца`;
              }
            })}
          </h3>

          <div className="product-list-wrapper">
            {itemsLoader && <p className="items-loader">Загрузка...</p>}
            {itemList.map((p, i) => (
              <ProductsItem info={{...p, doughTypes:info.doughTypes}} key={'p' + i}/>
            ))}
            <div className="last-noop"></div>
            <div className="last-noop"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsList;
