class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeUsers: null
      };
    }
  
    componentDidMount() {
      setTimeout(() => {
        this.setState({
          activeUsers: 1273
        });
      }, 2500);
    }
  
    render() {
      return (
        <div>
          {/* Render the activeUsers value in the h1 tag */}
          <h1>Active Users: {this.state.activeUsers}</h1>
        </div>
      );
    }
  }
  