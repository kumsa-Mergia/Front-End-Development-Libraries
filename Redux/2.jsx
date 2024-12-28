// Redux is already imported
const reducer = (state = 5) => {
  return state;
};

// Create the Redux store
const store = Redux.createStore(reducer);

// Retrieve the state from the store
const currentState = store.getState();

// Log currentState to verify
console.log(currentState); // Should log 5
