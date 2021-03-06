import React, { Component } from 'react';

class Home extends Component {

  render() {
    return (
      <div>
        <h2 style={{color: "white"}}>Welcome to Web-Lancer</h2>
        <p>This website is desgined to connect ideas to fully developed products. We accomplish this by providing a bridge between the Project Manager and the developer(s).</p>
        <h4 style={{color: "white"}}>Getting Started</h4>
        <p>As a <b>Project Manager</b> you can post a new Project on the Post a Project tab. From there you can input all of your Project information. When you're finished just press submit and wait for someone to contact you.</p>
        <p>As a <b>Developer</b> you can go straight into the Project List tab. From there you can look for Projects that interest you.</p>
        <p style={{color: "white"}}>Happy Coding!</p>
      </div>
    )
  }

}
export default Home;
