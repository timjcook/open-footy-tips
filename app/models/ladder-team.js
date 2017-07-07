import Ember from 'ember';
import DS from 'ember-data';

const { computed } = Ember;
const { Model, attr, belongsTo } = DS;

export default Model.extend({

  // attributes

  gamesPlayed: attr('number'),

  gamesWon: attr('number'),

  gamesLost: attr('number'),

  gamesDrawn: attr('number'),

  percentage: attr('number'),

  // properties

  prettyPercentage: computed('percentage', function() {
    return this.get('percentage').toFixed(1);
  }),

  // relationships

  ladder: belongsTo(),

  team: belongsTo()

});
