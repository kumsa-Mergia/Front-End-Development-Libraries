// Step 1: Define constants for increment and decrement action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Step 2: Define the counter reducer that will handle the INCREMENT and DECREMENT actions
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1; // Increment the state by 1
    case DECREMENT:
      return state - 1; // Decrement the state by 1
    default:
      return state; // Return the current state if no action is matched
  }
};

// Step 3: Define the action creators for incrementing and decrementing
const incAction = () => {
  return {
    type: INCREMENT, // Return an action with the INCREMENT type
  };
};

const decAction = () => {
  return {
    type: DECREMENT, // Return an action with the DECREMENT type
  };
};

// Step 4: Create the Redux store, passing the counterReducer
const store = Redux.createStore(counterReducer);

// Example usage of the store:
console.log(store.getState()); // Initial state (0)
store.dispatch(incAction()); // Increment the state
console.log(store.getState()); // State after increment (1)
store.dispatch(decAction()); // Decrement the state
console.log(store.getState()); // State after decrement (0)
