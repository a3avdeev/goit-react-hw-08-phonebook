import React from 'react';
import { nanoid } from 'nanoid';
import { FilterStyled } from "./Filter.Styled";
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    const onChange = (event) => {
        dispatch(setFilter(event.target.value));
    }
    
    const filterId = nanoid();

    return (
        <FilterStyled>
            <label htmlFor='filterId'>Find contacts by name</label>
            <input id={filterId} type="text" name="filter" value={filter}  onChange={onChange} placeholder="input something to search"/>
        </FilterStyled>
    )
}
