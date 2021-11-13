import { Mongo } from 'meteor/mongo';

Meteor.methods({
    'bins.insert': function() { // this.userId will not work with arrow function here
      return Bins.insert({
        // default properties for bin
        createdAt: new Date(),
        content: "",
        // meteor authentication magic:
        ownerId: this.userId,
        sharedWith: [],
      });
    },
    
    'bins.remove': function(bin) {
      return Bins.remove(bin);
    }
})

export const Bins = new Mongo.Collection('bins');
