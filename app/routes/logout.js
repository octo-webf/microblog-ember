import Ember from 'ember';

export default Ember.Route.extend({

  session: Ember.inject.service('session'),

  beforeModel() {
    if (this.get('session.isAuthenticated')) {
      this.get('session').invalidate();
    }
/*
    this.transitionTo('login');
*/
  }

});
