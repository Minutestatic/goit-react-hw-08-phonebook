import { LOGIN_ROUTE } from 'constants/routes';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthentication } from 'redux/selectors';

export const PrivateRoute = ({ children, redirectTo = LOGIN_ROUTE }) => {
  const authenticated = useSelector(selectAuthentication);

  return authenticated ? children : <Navigate to={redirectTo} replace />;
};
