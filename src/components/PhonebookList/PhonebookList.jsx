import PropTypes from 'prop-types';
import PhoneItem  from './PhonebookItem';

export default function PhoneList({ contacts = [], deleteContact }) {
    return (
      <>
        {contacts.map(({ id, name, number }) => {
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
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            })
            ).isRequired,
            deleteContact: PropTypes.func.isRequired,
          };
      

