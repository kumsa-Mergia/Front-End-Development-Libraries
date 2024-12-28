// Declare action types as constants
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN: // Reference the LOGIN constant
      return {
        authenticated: true
      };
    case LOGOUT: // Reference the LOGOUT constant
      return {
        authenticated: false
      };
    default:
      return state;
  }
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN // Use the LOGIN constant
  };
};

const logoutUser = () => {
  return {
    type: LOGOUT // Use the LOGOUT constant
  };
};
