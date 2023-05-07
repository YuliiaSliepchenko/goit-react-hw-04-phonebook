import { nanoid } from 'nanoid';
import { Component } from 'react';
import  Form  from './FormContacts/FormContacts';
import Filter from './FilterName/FilterName';
import PhoneList from './PhonebookList/PhonebookList'
import s from './App.module.css'



export class App extends Component {
  state = {
     contacts: [
    //  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
     ],
     filter: '',
};

  componentDidMount() {
    const contactStorige = JSON.parse(localStorage.getItem('contacts'));
    if (contactStorige) this.setState({ contacts: contactStorige });
  }
  componentDidUpdate(_, prevState) {
   if(this.state.contacts !== prevState.contacts) localStorage.setItem('contacts',JSON.stringify(this.state.contacts))
  }

contactAdd = ({ name, number }) => {
      const { contacts } = this.state;
      const newContacts = { id: nanoid(), name, number};

      contacts.some(contact => 
        contact.name.toLowerCase() === name.toLowerCase())
        ? alert(`This name "${name}" is already exist!`)
        : this.setState(({contacts}) => ({
          contacts: [newContacts, ...contacts],
        }));
  };

  filterOn = e => {
     this.setState({filter:e.currentTarget.value})
    };
        
      deleteContact = id => {
        this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id), 
    }));
  };

  filterContact = () => { 
    const { filter, contacts } = this.state;
    const normalize = filter.toLowerCase();
    return contacts.filter(contact => {
        return contact.name.toLowerCase().includes(normalize);
      });
  };

 formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    
    return (
      <div className={s.conteiner}>
        <h1>Phonebook</h1>
     <Form contactAdd={this.contactAdd}/>
     <h2>Contacts</h2>
     <Filter
     filterValue={this.state.filter}
     filterOn={this.filterOn}/>
     <PhoneList
     filteredContacts={this.filterContact()}
      deleteContact={this.deleteContact}
     />
    </div>
    );
  }
}