import moment from 'moment';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('round-fixture', 'Integration | Component | round fixture', {
  integration: true
});

test('it renders with a round fixture row for each match', function(assert) {
  assert.expect(3);

  let team1 = {
    name: 'Essendon'
  };
  let team2 = {
    name: 'Carlton'
  };
  let team3 = {
    name: 'Fremantle'
  };
  let team4 = {
    name: 'Geelong'
  };

  let ground1 = {
    name: 'MCG'
  };
  let ground2 = {
    name: 'Domain Stadium'
  };

  let matches = [{
    startTime: moment().subtract('1 day'),
    homeTeam: team1,
    awayTeam: team2,
    ground: ground1,
    isCompleted: false
  }, {
    startTime: moment().add('1 day'),
    homeTeam: team3,
    awayTeam: team4,
    ground: ground2,
    isCompleted: true
  }];
  this.set('round', {
    roundNumber: 1,
    matches
  });

  this.render(hbs`{{round-fixture round=round}}`);

  assert.equal(this.$('#round-fixture .match-row').length, matches.length);
  assert.equal(this.$('#round-fixture .match-completed').length, matches.filterBy('isCompleted', true).length);
  assert.equal(this.$('#round-fixture .match-future').length, matches.filterBy('isCompleted', false).length);
});
