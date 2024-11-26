const List = (props) => {
  return <p>{props.tasks.join(", ")}</p>; // Access the tasks prop and display it as a comma-separated list
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        {/* Pass today's tasks as a prop */}
        <List tasks={["walk dog", "workout"]} />
        <h2>Tomorrow</h2>
        {/* Pass tomorrow's tasks as a prop */}
        <List tasks={["study React", "grocery shopping", "clean house"]} />
      </div>
    );
  }
}

// Render ToDo to the DOM
const root = document.getElementById("challenge-node");
ReactDOM.render(<ToDo />, root);
