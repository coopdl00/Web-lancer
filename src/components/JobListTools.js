import React, { Component } from 'react';

class JobListTools extends Component {

  render() {
    return (
      <div className="my-2" style={{ backgroundColor: "#1F2833"}}>
        <button className="m-2 jobList-ghost-button-transition" onClick={() => this.props.refreshList()}>
          <i className="fa fa-refresh" aria-hidden="true"></i>  Refresh
        </button>
        <button className="m-2 jobList-ghost-button-transition" onClick={() => this.props.toggleGrid()}>
          {this.props.grid ? <div><i className="fa fa-bars"></i>  List</div> : <div><i className="fa fa-th-large"></i>  Grid</div>}
        </button>
      </div>
    )
  }
}
export default JobListTools;
