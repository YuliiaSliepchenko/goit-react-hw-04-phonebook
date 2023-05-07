import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './FormContacts.module.css'



export default function Form({contactAdd}) {
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

   const handleChange = e => {
        const input = e.target;
     switch (input.name) {
       case 'name':
         setName(input.value);
         break;
       case 'number':
         setNumber(input.value);
         break;
       default:
         return;
        }
  };
  const handleSubmit = e => {
  e.preventDefault();
    contactAdd({ name, number });
    setName('');
    setNumber('');
   }; 

   
    return ( 
                
         <form className={s.form} onSubmit={handleSubmit}>
            <h2 className={s.title}>Name</h2>
        <label className={s.form_label} htmlFor={name}>
          <input type="text"
           name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
           value={name} 
           onChange={handleChange}
           id={name}
            />
            </label>
            <h2 className={s.title}>Number</h2>
           <label className={s.form_label} htmlFor={number}>
          <input
           type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
           value={number} 
           onChange={handleChange}
           id={number}
            />
            </label>
          <button className={s.form_btn} type="submit">Add contacts</button>
          </form>
         );
      }
    
   Form.propTypes = {
    contactAdd:PropTypes.func.isRequired,
   };

