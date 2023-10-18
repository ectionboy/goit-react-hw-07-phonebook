import React from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';
import { getFilter } from 'redux/selectors';
import { filterSet } from 'redux/filter/slice';


const Filter = () => {

    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
  
    const handleFilter = value => {
      dispatch(filterSet(value));
    }
  return (
    <FilterContainer>
      <FilterLabel htmlFor="contactsfilter">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        name="filter"
        id="contactsfilter"
        value={filter ?? ''}
        onChange={value => handleFilter(value.target.value)}
      />
    </FilterContainer>
  )
}

export default Filter