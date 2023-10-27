import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ filter, filterChange }) => {
  return (
    <>
      <p className={s.title}>Find contacts by name</p>
      <input
        className={s.inpt}
        type="text"
        name="filter"
        value={filter}
        onChange={event => filterChange(event.target.value)}
      />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  filterChange: PropTypes.func.isRequired,
};

export default Filter;
