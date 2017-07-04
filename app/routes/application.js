import Ember from 'ember';

const { Route, RSVP } = Ember;

export default Route.extend({

  model() {
    return RSVP.hash({
      season: this.store.queryRecord('season', {
        year: 2017
      })
    });
  }

});
