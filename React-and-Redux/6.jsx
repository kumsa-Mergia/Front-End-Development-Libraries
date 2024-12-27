const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  };
};

// mapDispatchToProps function
const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message)); // Dispatching addMessage with the message as a payload
    }
  };
};
