import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';

import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.number.value;
    const formData = {
      name,
      number,
    };
    dispatch(addContact(formData));
    event.currentTarget.reset();
  };

  return (
    <form className={css['contact-form']} onSubmit={handleSubmit}>
      <label className={css['contact-form-label']}>
        Name
        <input
          className={css['contact-form-input']}
          type="text"
          name="name"
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
