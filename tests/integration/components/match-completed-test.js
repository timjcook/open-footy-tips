import moment from 'moment';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('match-completed', 'Integration | Component | match completed', {
  integration: true
});

test('it renders the correct time, venue and team score data for winning home team', function(assert) {
  assert.expect(11);

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
    ground,
    isCompleted: true,
    homeScoreGoals: 13,
    homeScoreBehinds: 7,
    homeScoreTotal: 85,
    awayScoreGoals: 10,
    awayScoreBehinds: 12,
    awayScoreTotal: 72,
    didHomeTeamWin: true,
    didAwayTeamWin: false,
    prettyHomeScore: '13.7 85',
    prettyAwayScore: '10.12 72'
  });

  this.render(hbs`{{match-completed match=match}}`);

  assert.ok(this.$('.match-completed').hasClass('match-row'));
  assert.equal(this.$('.match-completed .time-info .match-date').text().trim(), startTime.format('dddd, Do MMMM'));
  assert.equal(this.$('.match-completed .time-info .match-time').text().trim(), `${startTime.format('HH:mm')} AEST`);

  assert.equal(this.$('.match-completed .venue-info').text().trim(), ground.name);

  assert.ok(this.$('.match-completed .match-info .match-info-item.home').hasClass('winning-team'));
  assert.equal(this.$('.match-completed .match-info .match-info-item.home p').text().trim(), team1.name);
  assert.ok(this.$('.match-completed .match-info .match-info-item.home .score').text().trim(), `${this.get('match.homeScoreGoals')}.${this.get('match.homeScoreBehinds')} ${this.get('match.homeScoreTotal')}`);

  assert.equal(this.$('.match-completed .match-info .match-info-item.divider').text().trim(), 'def.');

  assert.ok(!this.$('.match-completed .match-info .match-info-item.away').hasClass('winning-team'));
  assert.equal(this.$('.match-completed .match-info .match-info-item.away p').text().trim(), team2.name);
  assert.ok(this.$('.match-completed .match-info .match-info-item.away .score').text().trim(), `${this.get('match.awayScoreGoals')}.${this.get('match.awayScoreBehinds')} ${this.get('match.awayScoreTotal')}`);
});

test('it renders the correct time, venue and team score data for winning away team', function(assert) {
  assert.expect(11);

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
    ground,
    isCompleted: true,
    homeScoreGoals: 10,
    homeScoreBehinds: 12,
    homeScoreTotal: 72,
    awayScoreGoals: 13,
    awayScoreBehinds: 7,
    awayScoreTotal: 85,
    didHomeTeamWin: false,
    didAwayTeamWin: true,
    prettyHomeScore: '10.12 72',
    prettyAwayScore: '13.7 85'
  });

  this.render(hbs`{{match-completed match=match}}`);

  assert.ok(this.$('.match-completed').hasClass('match-row'));
  assert.equal(this.$('.match-completed .time-info .match-date').text().trim(), startTime.format('dddd, Do MMMM'));
  assert.equal(this.$('.match-completed .time-info .match-time').text().trim(), `${startTime.format('HH:mm')} AEST`);

  assert.equal(this.$('.match-completed .venue-info').text().trim(), ground.name);

  assert.ok(!this.$('.match-completed .match-info .match-info-item.home').hasClass('winning-team'));
  assert.equal(this.$('.match-completed .match-info .match-info-item.home p').text().trim(), team1.name);
  assert.ok(this.$('.match-completed .match-info .match-info-item.home .score').text().trim(), `${this.get('match.homeScoreGoals')}.${this.get('match.homeScoreBehinds')} ${this.get('match.homeScoreTotal')}`);

  assert.equal(this.$('.match-completed .match-info .match-info-item.divider').text().trim(), 'def by.');

  assert.ok(this.$('.match-completed .match-info .match-info-item.away').hasClass('winning-team'));
  assert.equal(this.$('.match-completed .match-info .match-info-item.away p').text().trim(), team2.name);
  assert.ok(this.$('.match-completed .match-info .match-info-item.away .score').text().trim(), `${this.get('match.awayScoreGoals')}.${this.get('match.awayScoreBehinds')} ${this.get('match.awayScoreTotal')}`);
});
