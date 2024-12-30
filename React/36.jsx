// Declare styles constant at the top of the file
const styles = {
    color: 'purple',
    fontSize: 40,
    border: '2px solid purple'
  };
  
  class Colorful extends React.Component {
    render() {
      return (
        <div style={styles}>
          Style Me!
        </div>
      );
    }
  };
  