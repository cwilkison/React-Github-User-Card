import React from 'react';
import axios from 'axios';
import Followers from './Followers';
import { CardImg } from 'reactstrap';



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    };
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/cwilkison')
    .then(response => {
    this.setState({
      user: response.data
    });
    })
    .catch(error => {
      console.log("error", error)
    });
    axios.get('https://api.github.com/users/cwilkison/followers')
    .then(response => {
    this.setState({
      followers: response.data
    });
    })
    .catch(error => {
      console.log("error", error)
    });

  }

  render() {
    return (
      <div>
        <h1>Github User: {this.state.user.name}</h1>
        <h3>Location: {this.state.user.location}</h3>
        <h3>Following: {this.state.user.following}</h3>
        <h3>Followers: {this.state.user.followers}</h3>
        <CardImg width='25%' src={this.state.user.avatar_url}></CardImg>
        <Followers followers={this.state.followers}/>
      </div>
    );
  }
}

export default App;