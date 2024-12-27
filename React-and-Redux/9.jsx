// Redux Code
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React Code

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Updated Presentational Component
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  submitMessage() {
    // Dispatch the action to add a message to Redux
    this.props.submitNewMessage(this.state.input);
    // Clear the local input field after dispatching the message
    this.setState({ input: '' });
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange} /><br />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.props.messages.map((message, idx) => (
            <li key={idx}>{message}</li>
          ))}
        </ul>
      </div>
    );
  }
}

// Mapping Redux state and dispatch to props
const mapStateToProps = (state) => {
  return { messages: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  };
};

// Connecting Presentational component to Redux
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

// AppWrapper Component that wraps the entire app in the Redux provider
class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}
