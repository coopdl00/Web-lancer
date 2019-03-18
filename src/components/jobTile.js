import React, { Component } from 'react';

class JobTile extends Component {

  render() {
    return (
      <div>
        <p>test {this.props.job.name}</p>
      </div>
    )
  }

}
export default JobTile;
