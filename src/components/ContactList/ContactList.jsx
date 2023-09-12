import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/contactsSlice';
import { fetchContacts } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  // Отримуємо частини стану
  const { contacts, isLoading, error } = useSelector(selectContacts);
  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  console.log(contacts, isLoading, error);

  return (
    <ul className={css['contact-list']}>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      {contacts.length > 0 &&
        contacts.map(contact => {
          return (
            <li className={css['contact-list-item']} key={contact.id}>
              {contact.name}: {contact.phone}
              <div>
                <button
                  className={css['contact-list-button']}
                  // onClick={() => dispatch(deleteContact(contact.id))}
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
