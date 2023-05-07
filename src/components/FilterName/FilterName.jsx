import PropTypes from 'prop-types';
import s from './FilterName.module.css'

export default function Filter({inputChange}){
    return (
        <label  htmlFor="filter">
            <span>Find contacts by name</span>
            <input className={s.filter}  onChange={e => {inputChange(e.currentTarget.value)}} type="text" />
        </label>
    );
};
Filter.propTypes = {
    inputChange:PropTypes.func,
};

