const ADD_NOTE = 'ADD_NOTE';

// The reducer should handle the ADD_NOTE action and return the note text.
const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    case ADD_NOTE:
      return action.text; // Update state with the text from the action
    default:
      return state;
  }
};

// The action creator should return an action object with a type and the note text.
const addNoteText = (note) => {
  return {
    type: ADD_NOTE,
    text: note  // The note text passed into the action creator
  };
};

const store = Redux.createStore(notesReducer);

console.log(store.getState()); // Logs the initial state: "Initial State"
store.dispatch(addNoteText('Hello!')); // Dispatch the action with the note
console.log(store.getState()); // Logs the updated state: "Hello!"
