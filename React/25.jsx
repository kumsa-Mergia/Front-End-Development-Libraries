class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visibility: false // Initialize visibility to false
      };
      // Bind the toggleVisibility method to 'this'
      this.toggleVisibility = this.toggleVisibility.bind(this);
    }
  
    // Define the toggleVisibility method
    toggleVisibility() {
      // Use an anonymous function to toggle the visibility state
      this.setState(prevState => ({
        visibility: !prevState.visibility // Toggle visibility
      }));
    }

    render() {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          {/* Conditionally render the h1 element based on visibility state */}
          {this.state.visibility && <h1>Now you see me!</h1>}
        </div>
      );
    }
  }
  
