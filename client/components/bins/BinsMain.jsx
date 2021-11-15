import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/api/bins';
import BinsForm from './BinsForm'

class BinsMain extends Component {
    render() {
        console.log("Bin Id " + this.props.binId);
        return (
            <div>
                <BinsForm bin={this.props.bin} />
            </div>
        )
    }
}

export default withTracker( (props) => { // same as create container wrapper
    const { binId } = props.params;
    Meteor.subscribe('bins');
    return { bin: Bins.findOne(binId) };

})(BinsMain);
