import React, { Component } from 'react';

class NavBar extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <button onClick={() => this.props.toggleState("home")} className="mx-auto ghost-button-transition">Home</button>
          </div>
          <div className="col-4">
            <button onClick={() => this.props.toggleState("joblistpage")} className="mx-auto ghost-button-transition">Job List</button>
          </div>
          <div className="col-4">
            <button onClick={() => this.props.toggleState("posting")} className="mx-auto ghost-button-transition">Post a Job</button>
          </div>
        </div>
      </div>
    )
  }

}
export default NavBar;
