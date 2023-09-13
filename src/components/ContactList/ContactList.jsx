import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import css from './ContactList.module.css';
import { deleteContact } from 'redux/operations';

const ContactList = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);

  const { contacts, isLoading, error } = useSelector(getContacts);

  const getFilterContact = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getFilterContact();

  return (
    <ul className={css['contact-list']}>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      {contacts.length > 0 &&
        visibleContacts.map(contact => {
          return (
            <li className={css['contact-list-item']} key={contact.id}>
              {contact.name}: {contact.phone}
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
