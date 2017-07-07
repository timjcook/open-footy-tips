import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({

  ladder: null,

  ladderRows: computed.alias('ladder.ladderTeams')

});
