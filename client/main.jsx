import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from './components/App';
// we should import on both sides this for availiable calls of collection methods
import { Bins } from '../imports/api/bins';

Meteor.startup(() => {
  render(<App/>, document.getElementById('app'));
});
