import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const onFilterChange = e => {
    dispatch(setFilter(e.target.value));
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
