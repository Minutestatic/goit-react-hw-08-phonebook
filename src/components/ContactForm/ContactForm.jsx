import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './ContactForm.module.css';
import { selectContacts } from 'redux/selectors';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/contactsSlice';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.find(contact => {
        return contact.name === name.trim();
      })
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = {
      name: name.trim(),
      number: number.trim(),
      id: nanoid(),
    };
    setName('');
    setNumber('');

    dispatch(addContact(newContact));
  };

  return (
    <form className={css['contact-form']} onSubmit={handleSubmit}>
      <label className={css['contact-form-label']}>
        Name
        <input
          className={css['contact-form-input']}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </label>

      <label className={css['contact-form-label']}>
        Number
        <input
          className={css['contact-form-input']}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
      </label>
      <button className={css['contact-form-button']} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
