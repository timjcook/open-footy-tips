import DS from 'ember-data';

const { Model, attr, belongsTo } = DS;

export default Model.extend({

  // attributes

  startTime: attr('date'),

  isCompleted: attr('boolean'),

  homeTeam: belongsTo('team'),

  awayTeam: belongsTo('team'),

  ground: belongsTo('ground')

});
