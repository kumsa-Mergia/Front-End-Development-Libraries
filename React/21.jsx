class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp' // Set the 'name' state to 'freeCodeCamp'
      };
    }
  
    render() {
      return (
        <div>
          {/* Render the h1 element with the name from the state */}
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };