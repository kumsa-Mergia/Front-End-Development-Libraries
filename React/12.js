class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
        <Fruits />
        <Vegetables />

        {/* Change code above this line */}
      </div>
    );
  }
};
// Change code below this line
const root = document.getElementById("challenge-node");
ReactDOM.render(<TypesOfFood />, root);
