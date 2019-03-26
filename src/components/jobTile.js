import React, { Component } from 'react';
import JobDisplay from './jobDisplay.js'
import JobEdit from './jobEdit.js'

class JobTile extends Component {

  state = {
    editing: false
  }

  toggleEditing = () => {
    this.setState({editing: !this.state.editing})
  }

  render() {
    return (
      <div className={this.props.grid ? "grid" : "list"}>
        <div className="card rounded column m-2">
          {this.state.editing ? <JobEdit refreshList={this.props.refreshList} toggleEditing={this.toggleEditing} job={this.props.job}/> : <JobDisplay username={this.props.username} handleDelete={this.props.handleDelete} toggleEditing={this.toggleEditing} job={this.props.job}/>}
        </div>
      </div>
    )
  }
}
export default JobTile;
