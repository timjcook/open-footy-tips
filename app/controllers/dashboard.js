import Ember from 'ember';

const { Controller, computed } = Ember;

export default Controller.extend({

  // properties

  rounds: computed.alias('model.rounds'),

  currentRound: computed('rounds.[]', function() {
    return this.get('rounds').objectAt(0);
  }),

  actions: {
    selectRound(round) {
      this.set('currentRound', round);
    }
  }

});
