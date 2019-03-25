import React, { Component } from 'react';
import JobTile from '../components/jobTile.js'
import JobListTools from '../components/JobListTools.js'

class jobList extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <JobListTools toggleGrid={this.props.toggleGrid} grid={this.props.grid} refreshList={this.props.refreshList}/>
        </div>
        <div className="row">
          <div className="col-12">
            {this.props.jobs.map((job, i) => <JobTile grid={this.props.grid} key={i} job={job} />)}
          </div>
        </div>
      </div>
    )
  }

}
export default jobList;
