import { nanoid } from 'nanoid';
import { useState,useEffect } from 'react';
import  Form  from './FormContacts/FormContacts';
import Filter from './FilterName/FilterName';
import PhoneList from './PhonebookList/PhonebookList'
import s from './App.module.css'



export function App() {
  
  const [contacts, setContacts] = useState(() => {
    const contactStorige = JSON.parse(localStorage.getItem('contacts'));
    return contactStorige ? contactStorige : setContacts;
  });
  const [filter, setFilter] = useState('');
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts]);

  const contactAdd = data => {
    dublicatedName(data.name)
     ? alert(`This name "${data.name}" is already exist!`)
        : setContacts(prevState => [...prevState,{...data, id: nanoid() }]) 
  };

  const dublicatedName = name => {
    return contacts.some(contact =>
      contact.name.toLowerCase() === name.toLowerCase());
  };
  const filterContacts = () => { 
    return contacts.filter(contact => 
       contact.name.toLowerCase().includes(filter.toLowerCase())
      );
  };
  const filteredContacts = filterContacts();
        
     const deleteContact = id => {
       setContacts(prev => prev.filter(contact => contact.id !== id));
    };
    
    return (
      <div className={s.conteiner}>
        <h1>Phonebook</h1>
     <Form contactAdd={contactAdd}/>
     <h2>Contacts</h2>
     <Filter
    inputChange={setFilter}/>
     <PhoneList
     contacts={filteredContacts}
      deleteContact={deleteContact}
     />
    </div>
    );
  }
