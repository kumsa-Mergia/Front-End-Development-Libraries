class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: "Hello" // Initialize state with text: "Hello"
      };
      this.handleClick = this.handleClick.bind(this); // Bind handleClick method
    }
  
    handleClick() {
      // Update state when button is clicked
      this.setState({
        text: "You clicked!" // Change text to "You clicked!" when clicked
      });
    }
  
    render() {
      return (
        <div>
          {/* Button that triggers the handleClick method when clicked */}
          <button onClick={this.handleClick}>Click Me</button>
          
          {/* Render the updated text from the state */}
          <h1>{this.state.text}</h1>
        </div>
      );
    }
  };
  