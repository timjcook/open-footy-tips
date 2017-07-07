import { Model, hasMany, belongsTo } from 'ember-cli-mirage';

export default Model.extend({

  ladder: belongsTo(),

  rounds: hasMany()

});
