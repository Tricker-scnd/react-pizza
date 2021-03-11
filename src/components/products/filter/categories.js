import React from 'react';
import PropTypes from 'prop-types';

export default function Categories({ category, id, active, changeAction }) {
  return (
    <div className="filter_input">
      <input
        type="radio"
        name="category"
        onChange={() => changeAction(category.type)}
        id={id}
        checked={active === category.type}
      />

      <label className="btn btn--radio" htmlFor={id}>
        {category.category}
      </label>
    </div>
  );
}

Categories.propTypes = {
  category: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  changeAction: PropTypes.func.isRequired,
};
