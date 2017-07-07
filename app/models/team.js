import DS from 'ember-data';

const { Model, attr, belongsTo, hasMany } = DS;

export default Model.extend({

  // attributes

  name: attr('string'),

  nickname: attr('string'),

  // relationships

  homeGround: belongsTo('ground'),

  ladderTeam: belongsTo('ladder-team'),

  homeMatches: hasMany('matches', { inverse: 'homeTeam' }),

  awayMatches: hasMany('matches', { inverse: 'awayTeam' })

});
