import React, { Component } from 'react';

class JobPost extends Component {

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="titleInput">Job Title</label>
            <input type="text" onChange={(e) => this.props.titleUpdate(e)} className="form-control" id="titleInput" placeholder="Enter Title" required></input>
          </div>
          <div className="form-group">
            <label htmlFor="descriptionInput">Description</label>
            <textarea type="text" onChange={(e) => this.props.descriptionUpdate(e)} className="form-control" id="descriptionInput" placeholder="Enter a description" required></textarea>
          </div>
          <button type="submit" onClick={(e) => this.props.handlePost(e)} className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }

}
export default JobPost;