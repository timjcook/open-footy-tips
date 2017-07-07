import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({

  rounds: [],

  currentRound: null,

  actions: {
    selectRound(round) {
      this.attrs.selectRound(round);
    }
  }

});
