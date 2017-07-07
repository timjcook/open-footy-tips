import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({

  include: ['homeTeam', 'awayTeam', 'ground']

});
