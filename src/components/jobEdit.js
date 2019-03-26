import React, { Component } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../graphql/mutations'

class JobEdit extends Component {

  state = {
    technologies: this.props.job.technologies,
    errorMsg: "",
    title: this.props.job.title,
    description: this.props.job.description
  }

  handleEdit = async (e) => {
    e.preventDefault()
    let input = {
      id: this.props.job.id,
      title: this.state.title,
      description: this.state.description,
      technologies: this.state.technologies
    }
    if (input.title === "" || input.description === "") {
      this.setState({errorMsg: "Required"})
    } else {
      await API.graphql(graphqlOperation(mutations.updateJobs, {input: input}))
      this.props.toggleEditing()
      this.props.refreshList()
      this.setState({errorMsg: ""})
    }
  }

  titleUpdate = (e) => {
    this.setState({title: e.target.value})
  }

  descriptionUpdate = (e) => {
    this.setState({description: e.target.value})
  }

  dropdownUpdate = (param) => {
    this.setState({technologies: param})
  }

  render() {
    return (
      <div className="row">
        <form className="offset-md-3 col-md-6">
          <div className="form-group">
            <label htmlFor="titleInput">Project Title</label><br></br>
            <small style={{color: "red"}}>{this.state.errorMsg}</small>
            <input type="text" onChange={(e) => this.titleUpdate(e)} className="form-control" id="titleInput" placeholder="Enter Title" value={this.state.title} required></input>
          </div>
          <div className="form-group">
            <label htmlFor="descriptionInput">Description</label><br></br>
            <small style={{color: "red"}}>{this.state.errorMsg}</small>
            <textarea type="text" onChange={(e) => this.descriptionUpdate(e)} className="form-control" id="descriptionInput" placeholder="Enter a description" value={this.state.description} required></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="dropdownMenuButton">What type of Project?</label><br></br>
            <button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {this.state.technologies}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <div className="dropdown-item" onClick={() => this.dropdownUpdate("Offline App")}>Offline App</div>
              <div className="dropdown-item" onClick={() => this.dropdownUpdate("Website")}>Website</div>
              <div className="dropdown-item" onClick={() => this.dropdownUpdate("Mobile App")}>Mobile App</div>
            </div>
          </div>
          <button type="submit" onClick={(e) => this.handleEdit(e)} className="mx-auto custom-ghost-button-transition">Submit</button>
        </form>
      </div>
    )
  }

}
export default JobEdit;
