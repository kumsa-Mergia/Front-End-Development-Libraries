class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'Initial State' // Initialize state with name: 'Initial State'
      };
      this.handleClick = this.handleClick.bind(this); // Bind the handleClick method
    }
  
    handleClick() {
      // Update the name property in state when the button is clicked
      this.setState({
        name: 'React Rocks!' // Set name to 'React Rocks!' when clicked
      });
    }
  
    render() {
      return (
        <div>
          <button onClick={this.handleClick}>Click Me</button> {/* Button triggers handleClick */}
          <h1>{this.state.name}</h1> {/* Render the name property from state */}
        </div>
      );
    }
  };
  