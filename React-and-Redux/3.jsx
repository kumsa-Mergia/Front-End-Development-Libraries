// Step 1: Define ADD action type
const ADD = 'ADD';

// Step 2: Define the action creator
const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  };
};

// Step 3: Define the reducer
const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message]; // Add the new message immutably
    default:
      return state; // Return current state if action type does not match
  }
};

// Step 4: Create the Redux store
const store = Redux.createStore(messageReducer);
