import React, { Component } from 'react';

class JobTile extends Component {

  render() {
    return (
      <div className="colum">
        <p>test {this.props.job.title}</p>
      </div>
    )
  }

}
export default JobTile;
