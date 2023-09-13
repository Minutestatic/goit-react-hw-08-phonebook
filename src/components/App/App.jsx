import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { NavLink, Route, Routes } from 'react-router-dom';
import { MutatingDots } from 'react-loader-spinner';

import { fetchContacts } from 'redux/operations';
import {
  CONTACTS_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  appRoutes,
} from 'constants/routes';

import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

import css from './App.module.css';

const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

const App = () => {
  const dispatch = useDispatch();

  const { isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <header>
        <nav>
          <NavLink to={HOME_ROUTE}>Home</NavLink>
          <NavLink to={CONTACTS_ROUTE}>Contacts</NavLink>
          <NavLink to={LOGIN_ROUTE}>Login</NavLink>
          <NavLink to={REGISTER_ROUTE}>Register</NavLink>
        </nav>
      </header>

      <main>
        <div className={css.container}>
          <h1 className={css.title}>Phonebook</h1>
          <ContactForm />
          <h2 className={css.title}>Contacts</h2>
          <Filter />
          {isLoading && !error && <b>Request in progress...</b>}
          <ContactList />
        </div>
        <Suspense
          fallback={
            <MutatingDots
              height="100"
              width="100"
              color="#5800a5"
              secondaryColor="#e08e00"
              radius="12.5"
              ariaLabel="mutating-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          }
        >
          <Routes>
            {appRoutes.map(({ path, element }) => (
              <Route path={path} element={element} />
            ))}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default App;
