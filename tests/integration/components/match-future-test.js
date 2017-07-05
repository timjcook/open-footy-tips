import moment from 'moment';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('match-future', 'Integration | Component | match future', {
  integration: true
});

test('it renders with time, venue and match info', function(assert) {
  assert.expect(9);

  let team1 = {
    name: 'Essendon'
  };
  let team2 = {
    name: 'Carlton'
  };

  let ground = {
    name: 'MCG'
  };

  let startTime = moment().subtract('1 day');

  this.set('match', {
    startTime,
    homeTeam: team1,
    awayTeam: team2,
    ground
  });

  this.render(hbs`{{match-future match=match}}`);

  assert.ok(this.$('.match-future').hasClass('match-row'));
  assert.equal(this.$('.match-future .time-info .match-date').text().trim(), startTime.format('dddd, Do MMMM'));
  assert.equal(this.$('.match-future .time-info .match-time').text().trim(), `${startTime.format('HH:mm')} AEST`);

  assert.equal(this.$('.match-future .venue-info').text().trim(), ground.name);

  assert.equal(this.$('.match-future .match-info .match-info-item.home p').text().trim(), team1.name);
  assert.ok(this.$('.match-future .match-info .match-info-item.home .previous-results').length);
  assert.equal(this.$('.match-future .match-info .match-info-item.vs').text().trim(), 'vs.');
  assert.equal(this.$('.match-future .match-info .match-info-item.away p').text().trim(), team2.name);
  assert.ok(this.$('.match-future .match-info .match-info-item.away .previous-results').length);
});
