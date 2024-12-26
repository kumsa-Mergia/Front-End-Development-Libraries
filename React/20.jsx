class StatefulComponent extends React.Component {
    constructor(props) {
      super(props);
      // Initialize state with firstName property set to a string
      this.state = {
        firstName: 'kumsa', // Set 'kumsa' as the initial value of firstName
      };
    }
  
    render() {
      return (
        <div>
          <h1>{this.state.firstName}</h1> {/* Render firstName inside the h1 element */}
        </div>
      );
    }
  };
  