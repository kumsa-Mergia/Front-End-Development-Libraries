class App extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          { /* Pass the name prop to the Welcome component */ }
          <Welcome name="kumsa" />
        </div>
      );
    }
  };
  
  class Welcome extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <p>Hello, <strong>{this.props.name}</strong>!</p>
        </div>
      );
    }
  };
  