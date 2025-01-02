const frontEndFrameworks = [
    'React',
    'Angular',
    'Ember',
    'Knockout',
    'Backbone',
    'Vue'
  ];
  
  function Frameworks() {
    // Map over the frontEndFrameworks array and return a list of <li> elements with unique keys
    const renderFrameworks = frontEndFrameworks.map((framework, index) => (
      <li key={framework}>{framework}</li>  // Using the framework name as the unique key
    ));
  
    return (
      <div>
        <h1>Popular Front End JavaScript Frameworks</h1>
        <ul>
          {renderFrameworks}
        </ul>
      </div>
    );
  };
  