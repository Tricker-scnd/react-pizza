import React from 'react';
import Categories from './categories';
import Types from './types';
import PropTypes from 'prop-types'

export default function Filter({ state, actions }) {
  const [changeType, changeCategory] = actions;

  return (
    <div className="product-list__filter">
      <div className="filter__left-block">
        {state.categories.map((c, i) => (
          <Categories
            category={c}
            active={state.activeCategory}
            key={c + i}
            id={'category' + i}
            changeAction={changeCategory}
          />
        ))}
      </div>
      
        <Types types={state.types} active={state.activeType} changeAction={changeType} />
      
    </div>
  );
}

Filter.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.array.isRequired
}
