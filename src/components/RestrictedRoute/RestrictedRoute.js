import { HOME_ROUTE } from 'constants/routes';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthentication } from 'redux/selectors';

export const RestrictedRoute = ({ children, redirectTo = HOME_ROUTE }) => {
  const authenticated = useSelector(selectAuthentication);

  return authenticated ? <Navigate to={redirectTo} replace /> : children;
};
