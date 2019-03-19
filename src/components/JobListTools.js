import React, { Component } from 'react';

class JobListTools extends Component {

  render() {
    return (
      <div className="my-2">
        <button onClick={() => this.props.refreshList()}>Refresh Job List</button>
      </div>
    )
  }
}
export default JobListTools;
