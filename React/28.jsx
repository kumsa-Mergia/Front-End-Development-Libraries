class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        submit: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    // Method to update the input value in the state
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
  
    // Method to handle form submission
    handleSubmit(event) {
      event.preventDefault(); // Prevent default form submission (page refresh)
      this.setState({
        submit: this.state.input // Set submit property to the current input value
      });
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            {/* Controlled input field */}
            <input
              type="text"
              value={this.state.input} // Set input field value from state
              onChange={this.handleChange} // Handle input changes
            />
            <button type='submit'>Submit!</button>
          </form>
          {/* Display the submit value after form submission */}
          <h1>{this.state.submit}</h1>
        </div>
      );
    }
  }
  