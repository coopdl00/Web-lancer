import React, { Component } from 'react';
import JobTile from '../components/jobTile.js'
import JobListTools from '../components/JobListTools.js'

class jobList extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <JobListTools refreshList={this.props.refreshList}/>
        </div>
        <div className="row">
          <div className="col-xs-12">
            {this.props.jobs.map((job, i) => <JobTile key={i} job={job} />)}
          </div>
        </div>
      </div>
    )
  }

}
export default jobList;
