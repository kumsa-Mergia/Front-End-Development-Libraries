const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // Check if the action type is 'LOGIN'
  if (action.type === 'LOGIN') {
    return {
      ...state, // Spread the current state to preserve other properties
      login: true // Update the login property to true
    };
  }
  
  // Return the current state if action type is not 'LOGIN'
  return state;
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  };
};
