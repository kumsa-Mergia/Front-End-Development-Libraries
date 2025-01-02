class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users: [
          {
            username: 'Jeff',
            online: true
          },
          {
            username: 'Alan',
            online: false
          },
          {
            username: 'Mary',
            online: true
          },
          {
            username: 'Jim',
            online: false
          },
          {
            username: 'Sara',
            online: true
          },
          {
            username: 'Laura',
            online: true
          }
        ]
      };
    }
    render() {
      // Filter users who are online
      const usersOnline = this.state.users.filter(user => user.online);
      
      // Map over the filtered array and create li elements for each user
      const renderOnline = usersOnline.map(user => (
        <li key={user.username}>{user.username}</li>
      ));
      
      return (
        <div>
          <h1>Current Online Users:</h1>
          <ul>{renderOnline}</ul>
        </div>
      );
    }
  }
  