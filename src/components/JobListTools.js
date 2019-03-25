import React, { Component } from 'react';

class JobListTools extends Component {

  render() {
    return (
      <div className="offset-4 col-4 my-2" style={{ backgroundColor: "#1F2833"}}>
        <button className="jobList-ghost-button-transition" onClick={() => this.props.refreshList()}><i className="fa fa-refresh" aria-hidden="true"></i></button>
        <button className="grid-button jobList-ghost-button-transition" onClick={() => this.props.toggleGrid()}>{this.props.grid ? <h6><i className="fa fa-bars"></i> List View</h6> : <h6><i className="fa fa-th-large"></i> Grid View</h6>}</button>
      </div>
    )
  }
}
export default JobListTools;
