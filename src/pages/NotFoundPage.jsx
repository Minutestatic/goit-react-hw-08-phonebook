import { HOME_ROUTE } from 'constants/routes';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      Error 404. Sorry, page wasn`t found.
      <Link to={HOME_ROUTE}> Back to the Home page</Link>
    </div>
  );
};

export default NotFoundPage;
