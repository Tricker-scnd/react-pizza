import React, { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function Types({ types, active, changeAction }) {
  const [visibleSelect, setVisibleSelect] = useState(false);
  const clickRef = useRef(null);

  const customSelectClick = useCallback((e) => {
    if (clickRef.current && !clickRef.current.contains(e.target)) {
      setVisibleSelect(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('click', customSelectClick);

    return () => {
      window.removeEventListener('click', customSelectClick);
    };
  }, [customSelectClick]);

  return (
    <>
      <div ref={clickRef} className="filter__rigth-block">
        <div className="filter__rigth-block-label">
          Сортировка по:{' '}
          <span onClick={() => setVisibleSelect((prev) => !prev)}>
            {types.find((t) => t.type === active).label}
          </span>
        </div>
        <div
          className={classNames('filter__custom-select', {
            'filter__custom-select--active': visibleSelect,
          })}>
          {types.map((t, i) => (
            <div
              className={classNames('filter__custom-select-option', {
                'filter__custom-select-option--selected': active === t.type,
              })}
              onClick={() => {
                changeAction(t.type);
                setVisibleSelect((prev) => !prev);
              }}
              key={t.label + i}>
              {t.label}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

Types.propTypes = {
  types: PropTypes.array.isRequired,
  changeAction: PropTypes.func.isRequired,
};

Types.defaultProps ={
  types: []
}