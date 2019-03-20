import React, { Component } from 'react';

class JobListTools extends Component {

  render() {
    return (
      <div className="my-2">
        <button onClick={() => this.props.refreshList()}>Refresh Job List</button>
        <button onClick={() => this.props.toggleGrid()}>{this.props.grid ? "List View" : "Grid View"}</button>
      </div>
    )
  }
}
export default JobListTools;
