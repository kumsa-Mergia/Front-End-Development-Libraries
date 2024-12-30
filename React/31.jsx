class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
  
    componentWillMount() {
      // Log a message to the console before the component is mounted
      console.log("MyComponent will mount!");
    }
  
    render() {
      return <div />;
    }
  }
  