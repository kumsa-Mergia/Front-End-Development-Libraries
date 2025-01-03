class Results extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      // Render You Win! or You Lose! based on the fiftyFifty prop
      return <h1>{this.props.fiftyFifty ? 'You Win!' : 'You Lose!'}</h1>;
    }
  }
  
  class GameOfChance extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 1
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        counter: prevState.counter + 1
      }));
    }
  
    render() {
      // Generate a random 50/50 expression
      const expression = Math.random() >= 0.5;  // 50% chance for true or false
  
      return (
        <div>
          <button onClick={this.handleClick}>Play Again</button>
          {/* Render Results component with fiftyFifty prop */}
          <Results fiftyFifty={expression} />
          {/* Display current turn */}
          <p>{'Turn: ' + this.state.counter}</p>
        </div>
      );
    }
  }