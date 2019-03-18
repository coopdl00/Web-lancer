import React, { Component } from 'react';
import JobTile from './jobTile.js'

class jobList extends Component {

  render() {
    return (
      <div className="row">
        {this.props.jobs.map((job, i) => <JobTile key={i} job={job} />)}
      </div>
    )
  }

}
export default jobList;
