import React, { Component } from 'react';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import JobList from './pages/jobList.js'
import JobPost from './pages/JobPost.js'
import Home from './pages/home.js'
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import * as queries from './graphql/queries'
import * as mutations from './graphql/mutations'
import aws_exports from './aws-exports';
import Logo from './assets/logo.png'
import MyTheme from './assets/MyTheme'
Amplify.configure(aws_exports);

class App extends Component {

  state = {
    posting: false,
    home: true,
    joblistpage: false,
    sidenav: false,
    grid: false
  }

  componentDidMount = async () => {
    this.getCurrentUserInformation()
    this.refreshList()
  }

  titleUpdate = (e) => {
    this.setState({title: e.target.value})
  }

  descriptionUpdate = (e) => {
    this.setState({description: e.target.value})
  }

  toggleState = (param, e) => {
    e.preventDefault()
    this.setState({
      posting: false,
      home: false,
      joblistpage: false
    })
    let obj = {}
    obj[param] = true
    this.setState(obj)
  }

  handlePost = async (e) => {
    e.preventDefault()
    let Title = this.state.title
    let Description = this.state.description
    let postDate = `${Date.now()}`
    const input = {
      title: Title,
      description: Description,
      postedDate: postDate
    }
    await API.graphql(graphqlOperation(mutations.createJobs, {input: input}))
    this.toggleState("posting")

  }

  getCurrentUserInformation = async () => {
    await Auth.currentAuthenticatedUser()
      .then(user => this.setState({ userInfo: user }))
      .catch(err => this.setState({ error: err }))
  }

  refreshList = async () => {
    const newEvent = await API.graphql(graphqlOperation(queries.listJobss))
    let array = newEvent.data.listJobss.items
    array.sort(function(a,b){return b.postedDate - a.postedDate})
    this.setState({jobList: array})
  }

  toggleSideNav = () => {
    this.setState({
      sidenav: !this.state.sidenav
    })
  }

  toggleGrid = () => {
    this.setState({grid: !this.state.grid})
  }

  render() {
    return (
      <div className="App" id="Logo">
        <div className="hamburger-div ml-3 pt-3" onClick={this.toggleSideNav}>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
        </div>
        <div className={this.state.sidenav ? "sidenav-extended" : "sidenav"}>
          <button className="closebtn" onClick={this.toggleSideNav}>&times;</button>
          <button className="ghost-button-transition mt-5 my-2 mx-auto" onClick={(e) => this.toggleState('home', e)}>Home</button>
          <button className="ghost-button-transition my-2 mx-auto" onClick={(e) => this.toggleState('joblistpage', e)}>Job Listings</button>
          <button className="ghost-button-transition my-2 mx-auto" onClick={(e) => this.toggleState('posting', e)}>Post a Job</button>
        </div>
        <div className={this.state.sidenav ? "main-extended" : "main"}>
          <div className="container">
            <div className="text-center">
              <img id="Logoimage" src={Logo} alt="logo"/>
            </div>
          </div>
          <div className="container">
            {this.state.posting ?
              <JobPost
                descriptionUpdate={this.descriptionUpdate}
                titleUpdate={this.titleUpdate}
                handlePost={this.handlePost} /> : ""}
            {this.state.joblistpage ? <JobList toggleGrid={this.toggleGrid} grid={this.state.grid} jobs={this.state.jobList} refreshList={this.refreshList}/> : ""}
            {this.state.home ? <Home/> : ""}
          </div>
        </div>
      </div>
    );
  }
}

export default withAuthenticator(App, true, [], null, MyTheme);
