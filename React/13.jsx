// Change code below this line
class MyComponent extends React.Component {
  constructor(props) {
    super(props); // Always call the parent class constructor
  }
  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    );
  }
}
// Render MyComponent to the DOM
const root = document.getElementById("challenge-node");
ReactDOM.render(<MyComponent />, root);
