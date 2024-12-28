class ControlledInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '' // Initialize input state as an empty string
      };
      // Bind handleChange method to 'this'
      this.handleChange = this.handleChange.bind(this);
    }
  
    // Method to handle input changes
    handleChange(event) {
      // Update the state with the new input value
      this.setState({
        input: event.target.value
      });
    }
  
    render() {
      return (
        <div>
          {/* Controlled input field */}
          <input
            type="text"
            value={this.state.input} // Set the value to the input property from state
            onChange={this.handleChange} // Handle input changes
          />
          <h4>Controlled Input:</h4>
          {/* Display the current input value */}
          <p>{this.state.input}</p>
        </div>
      );
    }
  }
  