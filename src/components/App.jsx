import nextId from 'react-id-generator';
import { useState } from 'react';
import { useLocaleStorage } from 'utils/localeStorage';

import ContactsList from './Contacts/ContactsList';
import ContactForm from './Form/ContactForm';
import Filter from './Filter/Filter';

export const App = () => {
  const [filter, setFilter] = useState('');

  const [contacts, setContacts] = useLocaleStorage(
    [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    []
  );

  const addContact = ({ number, name }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
      setContacts(prevState => [
        ...prevState,
        { id: nextId(), name: name, number: number },
      ]);
    }
  };

  const filterChange = event => {
    setFilter(event.target.value);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const getFilteredContacts = () => {
    const filterName = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterName)
    );
  };

  const fltered = getFilteredContacts();

  return (
    <div
      style={{
        width: '500px',
        marginLeft: 'auto',
        marginRight: 'auto',
        border: '1px dashed orange',
        backgroundColor: '#fffcf9',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>PhoneBook</h1>

      <ContactForm onSubmit={addContact} />

      <h2 style={{ textAlign: 'center' }}>Contacts</h2>

      <Filter value={filter} onChange={filterChange} />
      <ContactsList deleteButton={deleteContact} contacts={fltered} />
    </div>
  );
};
export default App;
