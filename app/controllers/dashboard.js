import Ember from 'ember';

const { Controller, computed, inject } = Ember;

export default Controller.extend({

  // query parameters

  queryParams: ['roundNumber'],

  roundNumber: '',

  // properties

  season: computed.alias('model.season'),

  rounds: computed.alias('model.rounds'),

  ladder: computed.alias('model.ladder'),

  currentRound: computed.alias('model.currentRound'),

  actions: {
    selectRound(round) {
      this.set('roundNumber', round.get('roundNumber'));
    }
  }

});
