const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

// Combine the reducers using combineReducers
const rootReducer = Redux.combineReducers({
  count: counterReducer,  // The state key 'count' will be handled by counterReducer
  auth: authReducer       // The state key 'auth' will be handled by authReducer
});

const store = Redux.createStore(rootReducer);
