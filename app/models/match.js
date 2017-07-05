import DS from 'ember-data';

const { Model, attr, belongsTo } = DS;

export default Model.extend({

  startTime: attr('date'),

  homeTeam: belongsTo('team'),

  awayTeam: belongsTo('team'),

  ground: belongsTo('ground')

});
