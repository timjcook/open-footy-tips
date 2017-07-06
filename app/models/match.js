import Ember from 'ember';
import DS from 'ember-data';

const { computed } = Ember;
const { Model, attr, belongsTo } = DS;

export default Model.extend({

  // attributes

  startTime: attr('date'),

  isCompleted: attr('boolean'),

  homeScoreGoals: attr('number'),

  homeScoreBehinds: attr('number'),

  homeScoreTotal: attr('number'),

  awayScoreGoals: attr('number'),

  awayScoreBehinds: attr('number'),

  awayScoreTotal: attr('number'),

  // relationships

  homeTeam: belongsTo('team'),

  awayTeam: belongsTo('team'),

  ground: belongsTo('ground'),

  // properties

  didHomeTeamWin: computed('winningTeam.id', 'homeTeam.id', function() {
    return this.get('winningTeam.id') === this.get('homeTeam.id');
  }),

  didAwayTeamWin: computed('winningTeam.id', 'awayTeam.id', function() {
    return this.get('winningTeam.id') === this.get('awayTeam.id');
  }),

  didDraw: computed.equal('winningTeam', null),

  winningTeam: computed('homeScoreTotal', 'awayScoreTotal', function() {
    let winningTeam = null;

    if (this.get('homeScoreTotal') > this.get('awayScoreTotal')) {
      winningTeam = this.get('homeTeam');
    } else if (this.get('homeScoreTotal') < this.get('awayScoreTotal')) {
      winningTeam = this.get('awayTeam');
    }

    return winningTeam;
  }),

  prettyHomeScore: computed('homeScoreGoals', 'homeScoreBehinds', 'homeScoreTotal', function() {
    return this.prettyScore(this.get('homeScoreGoals'), this.get('homeScoreBehinds'), this.get('homeScoreTotal'));
  }),

  prettyAwayScore: computed('awayScoreGoals', 'awayScoreBehinds', 'awayScoreTotal', function() {
    return this.prettyScore(this.get('awayScoreGoals'), this.get('awayScoreBehinds'), this.get('awayScoreTotal'));
  }),

  // methods

  prettyScore(goals, behinds, total) {
    return `${goals}.${behinds} ${total}`;
  }

});
