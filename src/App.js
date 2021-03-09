import React, { Component } from 'react';
import shortid from 'shortid';
//components
import AddNameContact from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import styles from './components/styles.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      const parseContacts = JSON.parse(contacts);
      this.setState({ contacts: parseContacts });
    } else {
      return;
    }
  }
  checkContact = name => {
    return this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
  };
  addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    if (this.checkContact(name)) {
      alert('Такой контакт уже есть !!!!');
      return;
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
    console.log(this.state.contacts);
  };
  deleteCantact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  inputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  getVisibleContact = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  render() {
    return (
      <div>
        <h1>Телефонная книга</h1>
        <AddNameContact formSabmit={this.addContact} />
        <h2>Мои контакты: </h2>
        <Filter inputChange={this.inputChange} state={this.state.filter} />
        <ContactList
          contacts={this.getVisibleContact()}
          deleteCantact={this.deleteCantact}
        />
      </div>
    );
  }
}
export default App;
