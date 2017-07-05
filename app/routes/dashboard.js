import Ember from 'ember';

const { Route, RSVP } = Ember;

export default Route.extend({

  model() {
    let { season } = this.modelFor('application');

    return RSVP.hash({
      season,
      rounds: season.get('rounds')
    });
  }

});
