class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: ''
      };
      this.handleEnter = this.handleEnter.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
    }
  
    // Attach the keydown event listener in componentDidMount
    componentDidMount() {
      document.addEventListener('keydown', this.handleKeyPress);
    }
  
    // Remove the keydown event listener in componentWillUnmount
    componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyPress);
    }
  
    handleEnter() {
      this.setState((state) => ({
        message: state.message + 'You pressed the enter key! '
      }));
    }
  
    handleKeyPress(event) {
      if (event.keyCode === 13) {
        this.handleEnter();
      }
    }
  
    render() {
      return (
        <div>
          <h1>{this.state.message}</h1>
        </div>
      );
    }
  }