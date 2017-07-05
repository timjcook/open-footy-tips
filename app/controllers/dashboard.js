import Ember from 'ember';

const { Controller, computed } = Ember;

export default Controller.extend({

  queryParams: ['roundNumber'],

  roundNumber: '',

  // properties

  rounds: computed.alias('model.rounds'),

  currentRound: computed.alias('model.currentRound'),

  actions: {
    selectRound(round) {
      this.set('roundNumber', round.get('roundNumber'));
    }
  }

});
