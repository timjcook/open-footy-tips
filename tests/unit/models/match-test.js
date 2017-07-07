import { moduleForModel, test } from 'ember-qunit';

moduleForModel('match', 'Unit | Model | match', {
  // Specify the other units that are required for this test.
  needs: ['model:team', 'model:ground']
});

test('it will return the home team as the winning team if the homeScoreTotal > awayScoreTotal', function(assert) {
  let team1 = {
    name: 'Essendon'
  };
  let team2 = {
    name: 'Carlton'
  };

  let model = this.subject({
    homeScoreTotal: 100,
    awayScoreTotal: 80
  });

  model.homeTeam = team1;
  model.awayTeam = team2;

  assert.equal(model.get('winningTeam.name'), team1.name);
});

test('it will return the away team as the winning team if the homeScoreTotal < awayScoreTotal', function(assert) {
  let team1 = {
    name: 'Essendon'
  };
  let team2 = {
    name: 'Carlton'
  };

  let model = this.subject({
    homeScoreTotal: 80,
    awayScoreTotal: 100
  });

  model.homeTeam = team1;
  model.awayTeam = team2;

  assert.equal(model.get('winningTeam.name'), team2.name);
});

test('it will return winning team as null if the homeScoreTotal === awayScoreTotal', function(assert) {
  let team1 = {
    name: 'Essendon'
  };
  let team2 = {
    name: 'Carlton'
  };

  let model = this.subject({
    homeScoreTotal: 100,
    awayScoreTotal: 100
  });

  model.homeTeam = team1;
  model.awayTeam = team2;

  assert.equal(model.get('winningTeam'), null);
});

test('it will return the away team as the losing team if the homeScoreTotal > awayScoreTotal', function(assert) {
  let team1 = {
    name: 'Essendon'
  };
  let team2 = {
    name: 'Carlton'
  };

  let model = this.subject({
    homeScoreTotal: 100,
    awayScoreTotal: 80
  });

  model.homeTeam = team1;
  model.awayTeam = team2;

  assert.equal(model.get('losingTeam.name'), team2.name);
});

test('it will return the home team as the losing team if the homeScoreTotal < awayScoreTotal', function(assert) {
  let team1 = {
    name: 'Essendon'
  };
  let team2 = {
    name: 'Carlton'
  };

  let model = this.subject({
    homeScoreTotal: 80,
    awayScoreTotal: 100
  });

  model.homeTeam = team1;
  model.awayTeam = team2;

  assert.equal(model.get('losingTeam.name'), team1.name);
});

test('it will return the losing team as null if the homeScoreTotal === awayScoreTotal', function(assert) {
  let team1 = {
    name: 'Essendon'
  };
  let team2 = {
    name: 'Carlton'
  };

  let model = this.subject({
    homeScoreTotal: 100,
    awayScoreTotal: 100
  });

  model.homeTeam = team1;
  model.awayTeam = team2;

  assert.equal(model.get('losingTeam'), null);
});

test('it can check if the home team won', function(assert) {
  let model = this.subject();
  let team1 = {
    id: 123,
    name: 'Essendon'
  };
  let team2 = {
    id: 234,
    name: 'Carlton'
  };
  model.homeTeam = team1;
  model.awayTeam = team2;
  model.winningTeam = team1;

  assert.ok(model.get('didHomeTeamWin'));
});

test('it can check if the home team lost', function(assert) {
  let model = this.subject();
  let team1 = {
    id: 123,
    name: 'Essendon'
  };
  let team2 = {
    id: 234,
    name: 'Carlton'
  };
  model.homeTeam = team1;
  model.awayTeam = team2;
  model.winningTeam = team2;

  assert.ok(!model.get('didHomeTeamWin'));
});

test('it can check if the away team won', function(assert) {
  let model = this.subject();
  let team1 = {
    id: 123,
    name: 'Essendon'
  };
  let team2 = {
    id: 234,
    name: 'Carlton'
  };
  model.homeTeam = team1;
  model.awayTeam = team2;
  model.winningTeam = team2;

  assert.ok(model.get('didAwayTeamWin'));
});

test('it can check if the away team lost', function(assert) {
  let model = this.subject();
  let team1 = {
    id: 123,
    name: 'Essendon'
  };
  let team2 = {
    id: 234,
    name: 'Carlton'
  };
  model.homeTeam = team1;
  model.awayTeam = team2;
  model.winningTeam = team1;

  assert.ok(!model.get('didAwayTeamWin'));
});

test('it can check if the game was a draw', function(assert) {
  let model = this.subject();
  model.winningTeam = null;

  assert.ok(model.get('didDraw'));
});

test('it can format a pretty scoreline', function(assert) {
  let model = this.subject();

  assert.ok(model.prettyScore(10, 12, 72), '10.12 72');
});

test('it can format the home team\'s scoreline', function(assert) {
  assert.expect(3);

  let homeGoals = 10;
  let homeBehinds = 12;
  let homeTotal = 72;

  let model = this.subject({
    homeScoreGoals: homeGoals,
    homeScoreBehinds: homeBehinds,
    homeScoreTotal: homeTotal
  });
  model.prettyScore = (goals, behinds, total) => {
    assert.equal(goals, homeGoals);
    assert.equal(behinds, homeBehinds);
    assert.equal(total, homeTotal);
  };

  model.get('prettyHomeScore');
});

test('it can format the away team\'s scoreline', function(assert) {
  assert.expect(3);

  let awayGoals = 10;
  let awayBehinds = 12;
  let awayTotal = 72;

  let model = this.subject({
    awayScoreGoals: awayGoals,
    awayScoreBehinds: awayBehinds,
    awayScoreTotal: awayTotal
  });
  model.prettyScore = (goals, behinds, total) => {
    assert.equal(goals, awayGoals);
    assert.equal(behinds, awayBehinds);
    assert.equal(total, awayTotal);
  };

  model.get('prettyAwayScore');
});
