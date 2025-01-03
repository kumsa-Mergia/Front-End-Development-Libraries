class App extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <div>Hello, Server-Side Rendered App!</div>;
    }
  }
  
  // Rendering the App component to a string
  const renderedString = ReactDOMServer.renderToString(<App />);
  
  console.log(renderedString);