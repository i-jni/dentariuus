import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const jwtToken = localStorage.getItem('jwtToken');

  const isLoggedIn = jwtToken !== null;
  console.log('isLoggedIn:', isLoggedIn);

  return isLoggedIn ? children : <Navigate to="/login" />;
};
PrivateRoute.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
  

// redirect homepage when he click in login or register:

export const LoggedinRestriction = ({ children }) => {
  const isLoggedIn = localStorage.getItem('jwtToken') !== null;

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
};


LoggedinRestriction.propTypes = {
    children: PropTypes.node.isRequired,
};
  
// 