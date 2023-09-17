import { Suspense, lazy, useEffect } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthentication, selectUserData } from 'redux/selectors';

import {
  CONTACTS_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  appRoutes,
} from 'constants/routes';
import { logOutUser, refreshUser } from 'redux/operations';
import Loader from 'components/Loader';
import css from './App.module.css';

const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

const App = () => {
  const dispatch = useDispatch();

  const authenticated = useSelector(selectAuthentication);
  const userData = useSelector(selectUserData);

  const handleLogOut = () => {
    dispatch(logOutUser());
  };

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <header className={css.container}>
        <nav>
          <NavLink className={css.link} to={HOME_ROUTE}>
            Home
          </NavLink>

          {authenticated ? (
            <>
              <NavLink className={css.link} to={CONTACTS_ROUTE}>
                Contacts
              </NavLink>
              <span>Hello, {userData.name}</span>
              <button onClick={handleLogOut}>Log Out</button>
            </>
          ) : (
            <>
              <NavLink className={css.link} to={LOGIN_ROUTE}>
                Login
              </NavLink>
              <NavLink className={css.link} to={REGISTER_ROUTE}>
                Register
              </NavLink>
            </>
          )}
        </nav>
      </header>

      <main>
        <Suspense fallback={<Loader />}>
          <Routes base href="/goit-react-hw-08-phonebook/">
            {appRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default App;
