import DS from 'ember-data';

const { Model, attr, hasMany } = DS;

export default Model.extend({

  // Attributes

  year: attr('number'),

  // Relationships

  rounds: hasMany('rounds')

});
