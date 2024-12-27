class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp' // Set the 'name' state to 'freeCodeCamp'
      };
    }
  
    render() {
      // Define a const called 'name' that refers to the name value in the state
      const name = this.state.name;
  
      return (
        <div>
          {/* Use the variable 'name' in the h1 element */}
          <h1>{name}</h1>
        </div>
      );
    }
  };
  