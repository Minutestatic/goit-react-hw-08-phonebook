import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/operations';
import css from './LoginPage.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();

  const hendleSubmit = event => {
    event.preventDefault();

    const email = event.currentTarget.elements.userEmail.value;
    const password = event.currentTarget.elements.userPassword.value;

    const formData = {
      email,
      password,
    };
    dispatch(loginUser(formData));
  };
  return (
    <div className={css.container}>
      <h1>LoginPage</h1>
      <form className={css.loginpageform} onSubmit={hendleSubmit}>
        <label className={css.loginpagelabel}>
          <span className={css.loginpagespan}>Email:</span>
          <input
            type="email"
            name="userEmail"
            placeholder="Enter your email..."
            required
          />
        </label>
        <label className={css.loginpagelabel}>
          <span className={css.loginpagespan}>Password:</span>
          <input
            type="password"
            name="userPassword"
            placeholder="Enter your password..."
            minLength={7}
            required
          />
        </label>
        <button type="submit"> Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
