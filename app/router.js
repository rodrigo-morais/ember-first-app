import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('people');
    this.route('person');
    this.route('tasks');
    this.route('repositories');
    this.route('firstThreeRepos');
    this.route('simpleComponent');
    this.route('blockComponent');
    this.route('newEmbrace');
});

export default Router;
