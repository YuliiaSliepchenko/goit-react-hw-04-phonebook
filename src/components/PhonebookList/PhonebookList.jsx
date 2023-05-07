import PropTypes from 'prop-types';
import PhoneItem  from './PhonebookItem';

const PhoneList =({ filteredContacts, deleteContact }) => {
    return (
      <>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <PhoneItem
            deleteContact={deleteContact}
            key={id}
            id={id}
            name={name}
            number={number}
          />
        );
      })}
    </>
  );
};

PhoneList.propTypes = {
    filteredContacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            })
            ).isRequired,
            deleteContact: PropTypes.func.isRequired,
          };
      
 export default  PhoneList;   
