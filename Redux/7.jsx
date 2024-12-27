const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // Use a switch statement to handle multiple action types
  switch (action.type) {
    case 'LOGIN':
      return {
        authenticated: true // User is logged in
      };
    case 'LOGOUT':
      return {
        authenticated: false // User is logged out
      };
    default:
      return state; // Return current state if action type doesn't match
  }
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  };
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  };
};
