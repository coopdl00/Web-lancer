import React, { Component } from 'react';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import JobList from './components/jobList.js'
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import * as queries from './graphql/queries'
import * as mutations from './graphql/mutations'
import aws_exports from './aws-exports';
import Logo from './assets/logo.png'
import MyTheme from './assets/MyTheme'
Amplify.configure(aws_exports);

// #66FCF1

class App extends Component {

  state = {}

  componentDidMount = async () => {
    await this.getCurrentUserInformation()
    const newEvent = await API.graphql(graphqlOperation(queries.listJobss))
    await this.setState({
      jobList: newEvent.data.listJobss.items
    })
  }

  createJob = async () => {
    let obj = {
      title: "Social Media Website",
      description: "Test description"
    }

    const newEvent = await API.graphql(graphqlOperation(mutations.createJobs, {input: obj}))
    console.log(newEvent)
  }

  getCurrentUserInformation = async () => {
    await Auth.currentAuthenticatedUser()
      .then(user => this.setState({ userInfo: user }))
      .catch(err => this.setState({ error: err }))
  }

  refreshList = async () => {
    const newEvent = await API.graphql(graphqlOperation(queries.listJobss))
    this.setState({
      jobList: newEvent.data.listJobss.items
    })
  }

  render() {
    return (
      <div className="App" id="Logo">
        <div className="container">
          <div className="text-center">
            <img id="Logoimage" src={Logo} alt="logo"/>
          </div>
        </div>
        <button onClick={this.refreshList} >Refresh Job List</button>
        <button onClick={this.createJob} >Post job</button>

        {this.state.jobList ? <JobList jobs={this.state.jobList} /> : ""}
      </div>
    );
  }
}

export default withAuthenticator(App, true, [], null, MyTheme);
