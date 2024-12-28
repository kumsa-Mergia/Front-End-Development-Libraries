class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    };
  }

  // Method to update input in state as the user types
  handleChange = (event) => {
    this.setState({
      input: event.target.value  // Update the input value based on user typing
    });
  };

  // Method to add the input message to the messages array and clear the input
  submitMessage = () => {
    this.setState((prevState) => ({
      messages: [...prevState.messages, prevState.input], // Add the input to messages
      input: '' // Clear the input after submission
    }));
  };

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        {/* Input field for new message */}
        <input 
          type="text" 
          value={this.state.input} 
          onChange={this.handleChange} 
        />
        {/* Button to submit the message */}
        <button onClick={this.submitMessage}>Add message</button>
        {/* Unordered list to display messages */}
        <ul>
          {this.state.messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      </div>
    );
  }
};
