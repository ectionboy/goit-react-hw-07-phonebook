import React from 'react'
// import {  useSelector } from 'react-redux';
// import { filterChange } from 'redux/contacts/slice';
import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';


const Filter = () => {

    // const { filter } = useSelector(store => store.contacts);

    // const dispatch = useDispatch();
  
    // const handleFilter = value => {
    //   dispatch(filterChange(value));
    // }
  return (
    <FilterContainer>
      <FilterLabel htmlFor="contactsfilter">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        name="filter"
        id="contactsfilter"
        // value={filter ?? ''}
        // onChange={value => handleFilter(value.target.value)}
      />
    </FilterContainer>
  )
}

export default Filter