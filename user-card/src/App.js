// import React from 'react';
import './App.css';
import React from 'react';
import UserProfile from './components/UserProfile';
import Followers from './components/Followers';
import UserForm from './components/UserForm';


class App extends React.Component {
  state = {
    username: "CCooper92",
  }

  setUsername = (name) => {
    this.setState({
      username: name
    })
  }

  render(){
  return (
    <div className="App" style={{textAlign: 'center'}}>
      <h1>User Card</h1>
      <div>
        <UserProfile  username={this.state.username} />
        <UserForm setUsername={this.setUsername} />
        <Followers username={this.state.username} />
      </div>
    </div>
      
    );
  };
}

export default App;

