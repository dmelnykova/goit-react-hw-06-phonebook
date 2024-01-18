import { useDispatch, useSelector } from 'react-redux';
import { FilterWrapper } from './Filter.styled';
import { changeFilter, selectFilter } from '../../redux/filterSlice';




export const FilterField = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <FilterWrapper>
      Filter contacts by name:
      <input
        name="filter"
        type="text"
        value={filter}
        onChange={event => dispatch(changeFilter(event.target.value))}
      />
    </FilterWrapper>
  );
};