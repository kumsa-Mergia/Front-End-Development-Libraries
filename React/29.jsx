class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'CamperBot' // Name property in the state
      };
    }
  
    render() {
      return (
        <div>
          {/* Pass the name property from state down to Navbar as props */}
          <Navbar name={this.state.name} />
        </div>
      );
    }
  }
  
  class Navbar extends React.Component {
    render() {
      return (
        <div>
          {/* Access and display the name prop passed from MyApp */}
          <h1>Hello, my name is: {this.props.name}</h1>
        </div>
      );
    }
  }
  