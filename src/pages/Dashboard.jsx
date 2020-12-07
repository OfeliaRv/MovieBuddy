import React, { Component } from 'react';
import LeftNavbar from '../components/LeftNavbar/LeftNavbar';
import SearchBox from '../components/SearchBox/SearchBox';
import TopNavbar from '../components/layout/TopNavbar/TopNavbar';

class Dashboard extends Component {
  render() {
    return (
      <div className="index">
        <TopNavbar />
        <LeftNavbar />
        <div className="container">
          <SearchBox />
        </div>
      </div>
    );
  }
}

export default Dashboard;