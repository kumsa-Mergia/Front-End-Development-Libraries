class GateKeeper extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({ input: event.target.value });
    }
  
    render() {
      // Initially set the border style to black
      let inputStyle = {
        border: '1px solid black'
      };
  
      // If the input has more than 15 characters, change the border to red
      if (this.state.input.length > 15) {
        inputStyle = {
          border: '3px solid red'
        };
      }
  
      return (
        <div>
          <h3>Don't Type Too Much:</h3>
          <input
            type="text"
            style={inputStyle}
            value={this.state.input}
            onChange={this.handleChange}
          />
        </div>
      );
    }
  }
  