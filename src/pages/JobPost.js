import React, { Component } from 'react';

class JobPost extends Component {

  render() {
    return (
      <div className="row">
        <form className="offset-md-3 col-md-6">
          <div className="form-group">
            <label htmlFor="titleInput">Job Title</label><br></br>
            <small style={{color: "red"}}>{this.props.errorMsg}</small>
            <input type="text" onChange={(e) => this.props.titleUpdate(e)} className="form-control" id="titleInput" placeholder="Enter Title" required></input>
          </div>
          <div className="form-group">
            <label htmlFor="descriptionInput">Description</label><br></br>
            <small style={{color: "red"}}>{this.props.errorMsg}</small>
            <textarea type="text" onChange={(e) => this.props.descriptionUpdate(e)} className="form-control" id="descriptionInput" placeholder="Enter a description" required></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="dropdownMenuButton">What type of Job?</label><br></br>
            <button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {this.props.technologies}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <div className="dropdown-item" onClick={() => this.props.dropdownUpdate("Offline App")}>Offline App</div>
              <div className="dropdown-item" onClick={() => this.props.dropdownUpdate("Website")}>Website</div>
              <div className="dropdown-item" onClick={() => this.props.dropdownUpdate("Mobile App")}>Mobile App</div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="contactInfoInput">Contact Info</label><br></br>
            <small style={{color: "red"}}>{this.props.errorMsg}</small>
            <input type="text" onChange={(e) => this.props.contactInfoUpdate(e)} className="form-control" id="contactInfoInput" placeholder="Enter Email or phone" required></input>
          </div>
          <button type="submit" onClick={(e) => this.props.handlePost(e)} className="mx-auto custom-ghost-button-transition">Submit</button>
        </form>
      </div>
    )
  }

}
export default JobPost;
