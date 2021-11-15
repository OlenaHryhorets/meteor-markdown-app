import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/api/bins';
import { Link } from "react-router";

class BinsList extends Component {

    onBinRemove(bin) {
        Meteor.call('bins.remove', bin);
    }

    renderList() {
      return this.props.bins.map( bin => {
          return (
                <li className="list-group-item" key={bin._id}>
                    <Link to={`/bins/${bin.Id}`}>Bin {bin._id}</Link>
                    <span className="pull-right">
                        <button
                          className="btn btn-danger"
                          onClick={() => this.onBinRemove(bin)}>
                            Remove
                        </button>
                    </span>
                </li>
            );
        })   
    }

    render() {
        console.log(this.props.bins);
        return (
            <div>
                Bins List
                <ul className="list-group">
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}

export default withTracker(() => {
  // set up subscription
  Meteor.subscribe("bins");
  return { bins: Bins.find({}).fetch() };
})(BinsList);
