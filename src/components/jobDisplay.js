import React, { Component } from 'react';

class JobDisplay extends Component {

  render() {
    return (
      <div className="card-body">
        <h5 className="card-title">{this.props.job.title}</h5>
        <p className="card-text">{this.props.job.description}</p>
        <p className="card-text">{this.props.job.technologies}</p>
        <small className="pt-3 card-text">Posted By: {this.props.job.postedBy}</small><br></br>
        <small className="pt-3 card-text">Contact Info: {this.props.job.contactInfo}</small>
        {this.props.job.postedBy === this.props.username ?
          <div className="btn-group editbutton" role="group">
            <button type="button" style={{backgroundColor: "#111111", color: "white", borderColor: "#111111"}} className="" onClick={() => this.props.toggleEditing()}><i className="fa fa-lg fa-pencil" aria-hidden="true"></i></button>
            <button type="button" style={{backgroundColor: "#111111", color: "white", borderColor: "#111111"}} className="" onClick={() => this.props.handleDelete(this.props.job.id)}><i className="fa fa-lg fa-trash" aria-hidden="true"></i></button>
          </div> : ""}
      </div>
    )
  }

}
export default JobDisplay;
