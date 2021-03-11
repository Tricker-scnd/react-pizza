import React from 'react';
import PropTypes from 'prop-types'


export function SizeInput({ val, active, i, setActiveSize }) {
  return (
    <div
      className={active ? 'chose-list__size chose-list__size--chosen' : 'chose-list__size'}
      onClick={() => setActiveSize(i)}>
      {val} см.
    </div>
  );
}
export function DoughInput({ val, active, i, setActiveDough }) {
  return (
    <div
      className={active ? 'chose-list__type chose-list__type--chosen' : 'chose-list__type'}
      onClick={() => setActiveDough(i)}>
      {val}
    </div>
  );
}

SizeInput.propTypes = {
  val: PropTypes.number.isRequired,
  i: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  setActiveSize: PropTypes.func.isRequired,
};

DoughInput.propTypes = {
    val: PropTypes.string.isRequired,
    i: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired,
    setActiveDough: PropTypes.func.isRequired,
  };
