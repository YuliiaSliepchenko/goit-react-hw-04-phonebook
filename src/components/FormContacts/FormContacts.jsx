import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import s from './FormContacts.module.css'

class Form extends Component {
   state = {
    name: '',
    number: '',
};

    nameId = nanoid();
    numberId = nanoid();

    handleChange = e => {
        const  {name ,value } = e.currentTarget;
         this.setState({[name]: value });
         };

    handleSubmit = e => {
        const { name, number} =this.state;
            e.preventDefault();
          
            this.props.contactAdd({name: name, number:number});
            this.reset()
           };

           reset = () => {
            this.setState({ name: '', number: ''})
           };
          
   render() {
   
    return ( 
                
         <form className={s.form} onSubmit={this.handleSubmit}>
            <h2 className={s.title}>Name</h2>
        <label className={s.form_label} htmlFor={this.nameId}>
          <input type="text"
           name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
           value={this.state.name} 
           onChange={this.handleChange}
           id={this.nameId}
            />
            </label>
            <h2 className={s.title}>Number</h2>
           <label className={s.form_label} htmlFor={this.numberId}>
          <input
           type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
           value={this.state.number} 
           onChange={this.handleChange}
           id={this.numberId}
            />
            </label>
          <button className={s.form_btn} type="submit">Add contacts</button>
          </form>
         );
      }
    }
   Form.propTypes = {
    contactAdd:PropTypes.func.isRequired,
   };

export default Form;