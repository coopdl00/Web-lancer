import React, { Component } from 'react';

class JobTile extends Component {

  render() {
    return (
      <div className={this.props.grid ? "grid" : "list"}>
        <div className="card rounded column m-2">
          <div className="card-body">
            <h5 className="card-title">{this.props.job.title}</h5>
            <p className="card-text">{this.props.job.description}</p>
            <p className="card-text">{this.props.job.technologies}</p>
            <small className="pt-3 card-text">Posted By: {this.props.job.postedBy}</small>
          </div>
        </div>
      </div>
    )
  }
}
export default JobTile;
