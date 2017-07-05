import Ember from 'ember';

const { Route, RSVP } = Ember;

export default Route.extend({

  queryParams: {
    roundNumber: {
      refreshModel: true
    }
  },

  model() {
    let { season } = this.modelFor('application');

    return RSVP.hash({
      season,
      rounds: season.get('rounds')
    });
  },

  afterModel(model, { queryParams }) {
    let currentRoundNumber = queryParams.roundNumber;
    let currentRound = model.rounds.objectAt(0);

    if (currentRoundNumber) {
      currentRound = model.rounds.findBy('roundNumber', currentRoundNumber);
    }

    model.currentRound = currentRound;
  }

});
