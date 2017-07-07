import DS from 'ember-data';

const { Model, hasMany, belongsTo } = DS;

export default Model.extend({

  season: belongsTo(),

  ladderTeams: hasMany()

});
