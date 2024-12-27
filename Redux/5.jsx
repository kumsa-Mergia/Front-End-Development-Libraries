const store = Redux.createStore(
  (state = { login: false }) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  };
};

// Dispatch the LOGIN action
store.dispatch(loginAction());
