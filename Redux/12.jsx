const REQUESTING_DATA = 'REQUESTING_DATA';
const RECEIVED_DATA = 'RECEIVED_DATA';

const requestingData = () => {
  return { type: REQUESTING_DATA };
};

const receivedData = (data) => {
  return { type: RECEIVED_DATA, users: data.users };
};

const handleAsync = () => {
  return function(dispatch) {
    // Dispatch requesting data action to update state to fetching: true
    dispatch(requestingData());

    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      };
      // Dispatch received data action to update state with received users
      dispatch(receivedData(data));
    }, 2500); // Simulate a 2.5-second delay
  };
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        ...state,
        fetching: true, // Set fetching to true when requesting data
        users: []
      };
    case RECEIVED_DATA:
      return {
        ...state,
        fetching: false, // Set fetching to false when data is received
        users: action.users // Update the users array with the received data
      };
    default:
      return state;
  }
};

// Create the store with Redux and Redux Thunk middleware
const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);
