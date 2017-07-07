import DS from 'ember-data';

const { Model, attr, hasMany, belongsTo } = DS;

export default Model.extend({

  // Attributes

  year: attr('number'),

  // Relationships

  ladder: belongsTo('ladder'),

  rounds: hasMany('rounds')

});
