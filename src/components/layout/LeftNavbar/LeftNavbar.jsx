import React, { Component } from 'react';
import '../../../assets/styles/css/style.css';
import cinema from '../../../assets/img/clapperboard.svg';


class LeftNavbar extends Component {
  render() {
    return (
      <div id="left-navbar-section">
        <nav id="left-navbar">
          <div id="left-profile">
            <div id="profile-picture">
            </div>
          </div>
          <div id="left-navbar-icons">
            <div id="left-top-icons">
              <div className="icon-item"><i class="material-icons">favorite</i></div>
              <div className="icon-item"><img src={cinema} alt="Already watched"></img></div>
              <div className="icon-item"><i class="material-icons">star</i></div>
            </div>
            <div id="left-bottom-icons">
              <div className="icon-item"><i class="material-icons">settings</i></div>
              <div className="icon-item"><span class="material-icons">login</span></div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default LeftNavbar;