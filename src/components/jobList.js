import React, { Component } from 'react';
import JobTile from './jobTile.js'

class jobList extends Component {

  render() {
    return (
      <div>
        {this.props.jobs.map(job => <JobTile job={job} />)}
      </div>
    )
  }

}
export default jobList;
