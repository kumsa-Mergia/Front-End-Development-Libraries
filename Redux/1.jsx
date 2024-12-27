// Redux is already included in the environment
const reducer = (state = 5) => {
  return state;
};

// Declare the Redux store
const store = Redux.createStore(reducer);

// Log the state to verify
console.log(store.getState()); // Should log 5
