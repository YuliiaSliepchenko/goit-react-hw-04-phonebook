import PropTypes from 'prop-types';
import s from './PhonebookItem.module.css'

const PhoneItem = ({id, name, number, deleteContact}) => {
    return (
        <div className={s.item_list}>
            <li  className={s.item_text} key={id}>
                {name}: {number}
                
<button className={s.item_btn} onClick={() => deleteContact(id)} type="button" id={id}>
    Delete
    </button>
      </li>                  
      </div>
    );
};
PhoneItem.propTypes = {
    id:PropTypes.string.isRequired,
     name:PropTypes.string.isRequired,
      number:PropTypes.string.isRequired,
       deleteContact:PropTypes.func.isRequired 
}

export default PhoneItem;