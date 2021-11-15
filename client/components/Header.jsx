import React, { Component } from 'react';
import Accounts from './Accounts';
import { Link } from "react-router-dom";

class Header extends Component {
  onBinClick = (event) => {
      event.preventDefault();
      console.log("EVENT+> " + event);
      
      Meteor.call("bins.insert", (error, binId) => {
        console.log("BINID+> " + binId); // returns new bin id
        // browserHistory.push(`/bins/${binId}`); // navigate to the new bin page
        
       this.location.push(`/bins/${binId}`);
      });
  }
  render() {
    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">Markbin</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Accounts />
          </li>
          <li>
            <a href="#" onClick={this.onBinClick}>
              Create Bin
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
// onClick={() => history.push('/')}

export default Header;
