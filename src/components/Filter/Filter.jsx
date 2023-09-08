import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilterValue } from 'redux/selectors';
import { setFilterValue } from 'redux/filterSlice';

import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(selectFilterValue);

  const dispatch = useDispatch();

  const onFilterChange = e => {
    dispatch(setFilterValue(e.target.value));
  };

  return (
    <input
      className={css['filter-input']}
      type="text"
      placeholder="Search by name"
      value={filter}
      onChange={onFilterChange}
    />
  );
};

export default Filter;
