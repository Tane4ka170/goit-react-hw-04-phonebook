import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import s from './App.module.css';

const App = () => {
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) || initialContacts
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = event => {
    const loweredCase = event.name.toLowerCase().trim();

    const exists = contacts.some(
      contact => contact.name.toLowerCase().trim() === loweredCase
    );

    if (exists) {
      alert(`${event.name} is already in contacts!`);
    } else {
      const newContact = { ...event, id: nanoid() };
      setContacts([...contacts, newContact]);
    }
  };

  const addFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  const deleteContact = id => {
    const filtered = contacts.filter(contact => contact.id !== id);
    setContacts(filtered);
  };

  return (
    <div className={s.div}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2 className={s.title}>Contacts</h2>
      <Filter filter={filter} filterChange={addFilter} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
