import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectContactsError,
  selectContactsIsLoading,
  selectFilter,
} from 'redux/selectors';
import { deleteContact, requestContacts } from 'redux/operations';
import { useEffect } from 'react';
import Loader from 'components/Loader';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(requestContacts());
  }, [dispatch]);

  const getFilterContact = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const searchContacts = getFilterContact();

  const visibleContacts = Array.isArray(contacts) && contacts.length > 0;

  return (
    <ul className={css['contact-list']}>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {visibleContacts &&
        searchContacts.map(({ name, number, id }) => {
          return (
            <li className={css['contact-list-item']} key={id}>
              {name}: {number}
              <div>
                <button
                  className={css['contact-list-button']}
                  onClick={() => dispatch(deleteContact(id))}
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
