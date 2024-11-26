const CurrentDate = (props) => {
  return (
    <div>
      {/* Access the date prop and display it */}
      <p>The current date is: {props.date}</p>
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        {/* Pass the current date as a prop to CurrentDate */}
        <CurrentDate date={Date()} />
      </div>
    );
  }
}

// Render Calendar to the DOM
const root = document.getElementById("challenge-node");
ReactDOM.render(<Calendar />, root);
