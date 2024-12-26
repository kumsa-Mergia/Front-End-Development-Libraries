class CampSite extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper />
        </div>
      );
    }
  }
  
  // Camper component
  const Camper = (props) => {
    return <p>{props.name}</p>;
  };
  
  // Prop types for Camper component
  Camper.propTypes = { name: PropTypes.string.isRequired };
  
  // Default props for Camper component
  Camper.defaultProps ={ name: 'CamperBot' }