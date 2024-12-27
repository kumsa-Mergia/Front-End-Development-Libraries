const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Define the listener function that increments the global count variable
const listener = () => {
  count += 1;
};

// Subscribe the listener to the store
store.subscribe(listener);

// Dispatch actions
store.dispatch({ type: ADD });
console.log(count); // Should log 1 after the first dispatch
store.dispatch({ type: ADD });
console.log(count); // Should log 2 after the second dispatch
store.dispatch({ type: ADD });
console.log(count); // Should log 3 after the third dispatch
