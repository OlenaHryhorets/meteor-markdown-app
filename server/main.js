import { Meteor } from 'meteor/meteor';

import { Bins } from '/imports/api/bins';

function insertLink({ title, url }) {
  LinksCollection.insert({title, url, createdAt: new Date()});
}

Meteor.startup(() => {
  
});
