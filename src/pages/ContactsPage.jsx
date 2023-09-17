import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

import { useSelector } from 'react-redux';
import { selectContactsIsLoading } from 'redux/selectors';
import Loader from 'components/Loader';
import css from '../components/App/App.module.css';

const ContactsPage = () => {
  const isLoading = useSelector(selectContactsIsLoading);

  return (
    <div>
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />

        <h2 className={css.title}>Contacts</h2>
        <Filter />
        {isLoading && <Loader /> && <b>Request in progress...</b>}
        <ContactList />
      </div>
    </div>
  );
};

export default ContactsPage;
