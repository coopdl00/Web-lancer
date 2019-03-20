import React, { Component } from 'react';

class JobListTools extends Component {

  render() {
    return (
      <div className="my-2">
        <button onClick={() => this.props.refreshList()}>Refresh Job List</button>
        <button onClick={() => this.props.toggleGrid()}>{this.props.grid ? <h4><i className="fa fa-bars"></i> List View</h4> : <h4><i className="fa fa-th-large"></i> Grid</h4>}</button>
      </div>
    )
  }
}
export default JobListTools;
