class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0 // Initialize count to 0
      };
  
      // Bind methods to 'this'
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.reset = this.reset.bind(this);
    }
  
    // Method to increment the count by 1
    increment() {
      this.setState(prevState => ({
        count: prevState.count + 1
      }));
    }
  
    // Method to decrement the count by 1
    decrement() {
      this.setState(prevState => ({
        count: prevState.count - 1
      }));
    }
  
    // Method to reset the count to 0
    reset() {
      this.setState({
        count: 0
      });
    }
  
    render() {
      return (
        <div>
          {/* Button to increment the count */}
          <button className='inc' onClick={this.increment}>Increment!</button>
          {/* Button to decrement the count */}
          <button className='dec' onClick={this.decrement}>Decrement!</button>
          {/* Button to reset the count */}
          <button className='reset' onClick={this.reset}>Reset</button>
          {/* Display the current count */}
          <h1>Current Count: {this.state.count}</h1>
        </div>
      );
    }
  }
  