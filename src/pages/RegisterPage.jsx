import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/operations';
import css from './RegisterPage.module.css';

const RegisterPage = () => {
  const dispqtch = useDispatch();

  const hendleSubmit = event => {
    event.preventDefault();

    const name = event.currentTarget.elements.userName.value;
    const email = event.currentTarget.elements.userEmail.value;
    const password = event.currentTarget.elements.userPassword.value;

    const formData = {
      name,
      email,
      password,
    };
    dispqtch(registerUser(formData));
  };
  return (
    <div className={css.container}>
      <h1>RegisterPage</h1>
      <form onSubmit={hendleSubmit}>
        <label>
          <span>Username:</span>
          <input
            className={css.registerpageinput}
            type="text"
            name="userName"
            placeholder="Enter your name..."
            required
          />
        </label>
        <label>
          <span>Email:</span>
          <input
            className={css.registerpageinput}
            type="email"
            name="userEmail"
            placeholder="Enter your email..."
            required
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            className={css.registerpageinput}
            type="password"
            name="userPassword"
            placeholder="Enter your password..."
            minLength={7}
            required
          />
        </label>
        <button type="submit"> Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
