import PropTypes from 'prop-types';
import s from './FilterName.module.css'

const Filter = ({filterValue, filterOn}) => {
    return (
        <label  htmlFor="">
            <span>Find contacts by name</span>
            <input className={s.filter} value={filterValue} onChange={filterOn} type="text" />
        </label>
    );
};
Filter.propTypes = {
    filterValue: PropTypes.string.isRequired,
    filterOn:PropTypes.func.isRequired,
};

export default Filter;