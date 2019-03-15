import React, { Component } from 'react';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import * as queries from './graphql/queries'
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {

  state = {

  }

  componentDidMount = async () => {
    await Auth.currentAuthenticatedUser()
      .then(user => this.setState({ userInfo: user }))
      .catch(err => this.setState({ error: err }))
  }

  todoMutation = async () => {
    const newEvent = await API.graphql(graphqlOperation(queries.listUserss));
    alert(JSON.stringify(newEvent));
  }

  test = () => {
    console.log(this.state.userInfo)
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.test}>Button</button>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
