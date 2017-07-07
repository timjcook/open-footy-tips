import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({

  homeTeam: belongsTo('team'),

  awayTeam: belongsTo('team'),

  ground: belongsTo('ground')

});
