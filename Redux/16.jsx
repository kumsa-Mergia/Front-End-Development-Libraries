const immutableReducer = (state = [0, 1, 2, 3, 4, 5], action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      // Remove item at the specified index and return a new array
      return [
        ...state.slice(0, action.index),  // Items before the index
        ...state.slice(action.index + 1) // Items after the index
      ];
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  };
}

const store = Redux.createStore(immutableReducer);
