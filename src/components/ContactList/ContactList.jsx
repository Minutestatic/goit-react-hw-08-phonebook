import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilterContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectFilterContacts);
  const dispatch = useDispatch();

  return (
    <ul className={css['contact-list']}>
      {contacts.map(contact => {
        return (
          <li className={css['contact-list-item']} key={contact.id}>
            {contact.name}: {contact.number}
            <div>
              <button
                className={css['contact-list-button']}
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
