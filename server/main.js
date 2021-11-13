import { Meteor } from 'meteor/meteor';
import { Bins } from '../imports/api/bins';

Meteor.startup(() => {
  Meteor.publish('bins', function() {
    // publish only bins that are owned by the current user
    return Bins.find({ ownerId: this.userId });
  });
  
});
