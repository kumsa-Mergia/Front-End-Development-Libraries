const textAreaStyles = {
    width: 235,
    margin: 5
  };
  
  class MyToDoList extends React.Component {
    constructor(props) {
      super(props);
      // Initialize state with userInput as empty string and toDoList as empty array
      this.state = {
        userInput: '',
        toDoList: []
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleSubmit() {
      // Split the userInput by commas and update the toDoList state
      const itemsArray = this.state.userInput.split(',');
      this.setState({
        toDoList: itemsArray
      });
    }
  
    handleChange(e) {
      // Update userInput state with the current value of the textarea
      this.setState({
        userInput: e.target.value
      });
    }
  
    render() {
      // Dynamically render a list item for each entry in the toDoList array
      const items = this.state.toDoList.map((item, index) => {
        return <li key={index}>{item}</li>;
      });
  
      return (
        <div>
          <textarea
            onChange={this.handleChange}
            value={this.state.userInput}
            style={textAreaStyles}
            placeholder='Separate Items With Commas'
          />
          <br />
          <button onClick={this.handleSubmit}>Create List</button>
          <h1>My "To Do" List:</h1>
          <ul>{items}</ul>
        </div>
      );
    }
  }
  