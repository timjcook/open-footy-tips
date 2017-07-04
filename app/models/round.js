import DS from 'ember-data';

const { Model, attr, belongsTo } = DS;

export default Model.extend({

  // attributes

  roundNumber: attr('string'),

  // relationships

  season: belongsTo('season')

});
