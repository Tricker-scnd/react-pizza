import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import ProductsItem from './productsItem';
import Filter from './filter/filter';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setSortBy } from '../../redux/actions/filters';
import { fetchFilterItems} from '../../redux/actions/pizzaItems';
import { filterParametrs } from '../../helpers/parametrs';

function ProductsList() {
  const itemsRef = useRef(null);
  
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.pizzaItems.items);
  const itemsLoader = useSelector((state) => state.pizzaItems.loader);

  const activeCategory = useSelector((state) => state.filters.activeCategory);
  const activeType = useSelector((state) => state.filters.activeType);

  useEffect(() => {
    const itemsAppear = setInterval(() => {
      if (window.pageYOffset > 470) {
        itemsRef.current.classList.add('start-show');
        clearInterval(itemsAppear);
      }
    }, 1000);
    return () => clearInterval(itemsAppear);
  }, []);


  
  const changeType = useCallback((val) => {
    dispatch(setSortBy(val));
    dispatch(fetchFilterItems())
  }, []);

  const changeCategory = useCallback((val) => {
    dispatch(setCategory(val));
    dispatch(fetchFilterItems())
  }, []);



  const info = useMemo(() => ({ ...filterParametrs, activeCategory, activeType }), [
    activeCategory,
    activeType,
  ]);
  const actions = useMemo(() => [changeType, changeCategory], [changeType, changeCategory]);

  return (
    <section ref={itemsRef} className="section-outer section-product-list">
      <div className="inner-wrapper">
        <Filter state={info} actions={actions} />
        <div className="product-list__container">
          <h3>
            {filterParametrs.categories.map((c) => {
              if (c.type === activeCategory) {
                if (c.type === '') return `Все пиццы`;
                return `${c.type} пицца`;
              }
            })}
          </h3>

          <div className="product-list-wrapper">
            {itemsLoader && <p className="items-loader">Загрузка...</p>}
            {itemList.map((p, i) => (
              <ProductsItem info={p} key={'p' + i} />
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
