import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('season-ladder', 'Integration | Component | season ladder', {
  integration: true
});

test('it renders the ladder with header and all teams', function(assert) {
  assert.expect(25);

  let team1 = {
    name: 'Essendon'
  };
  let ladderTeam1 = {
    team: team1,
    gamesPlayed: 10,
    gamesWon: 6,
    gamesLost: 4,
    gamesDrawn: 0,
    prettyPercentage: 96.8
  };

  let team2 = {
    name: 'Carlton'
  };
  let ladderTeam2 = {
    team: team2,
    gamesPlayed: 10,
    gamesWon: 5,
    gamesLost: 5,
    gamesDrawn: 0,
    prettyPercentage: 187.1
  };

  let team3 = {
    name: 'Brisbane'
  };
  let ladderTeam3 = {
    team: team3,
    gamesPlayed: 10,
    gamesWon: 3,
    gamesLost: 6,
    gamesDrawn: 1,
    prettyPercentage: 72.0
  };

  this.set('ladder', {
    ladderTeams: [
      ladderTeam1,
      ladderTeam2,
      ladderTeam3
    ]
  });

  this.render(hbs`{{season-ladder ladder=ladder}}`);

  assert.equal(this.$('#season-ladder .ladder-header .team-name').text().trim(), 'Name');
  assert.equal(this.$('#season-ladder .ladder-header .games-played').text().trim(), 'P');
  assert.equal(this.$('#season-ladder .ladder-header .games-won').text().trim(), 'W');
  assert.equal(this.$('#season-ladder .ladder-header .games-lost').text().trim(), 'L');
  assert.equal(this.$('#season-ladder .ladder-header .games-drawn').text().trim(), 'D');
  assert.equal(this.$('#season-ladder .ladder-header .team-percentage').text().trim(), '%');

  assert.equal(this.$('#season-ladder .ladder-team').length, this.get('ladder').ladderTeams.length);

  assert.equal(this.$('#season-ladder .ladder-team').eq(0).find('.team-name').text().trim(), ladderTeam1.team.name);
  assert.equal(this.$('#season-ladder .ladder-team').eq(0).find('.games-played').text().trim(), ladderTeam1.gamesPlayed);
  assert.equal(this.$('#season-ladder .ladder-team').eq(0).find('.games-won').text().trim(), ladderTeam1.gamesWon);
  assert.equal(this.$('#season-ladder .ladder-team').eq(0).find('.games-lost').text().trim(), ladderTeam1.gamesLost);
  assert.equal(this.$('#season-ladder .ladder-team').eq(0).find('.games-drawn').text().trim(), ladderTeam1.gamesDrawn);
  assert.equal(this.$('#season-ladder .ladder-team').eq(0).find('.team-percentage').text().trim(), ladderTeam1.prettyPercentage);

  assert.equal(this.$('#season-ladder .ladder-team').eq(1).find('.team-name').text().trim(), ladderTeam2.team.name);
  assert.equal(this.$('#season-ladder .ladder-team').eq(1).find('.games-played').text().trim(), ladderTeam2.gamesPlayed);
  assert.equal(this.$('#season-ladder .ladder-team').eq(1).find('.games-won').text().trim(), ladderTeam2.gamesWon);
  assert.equal(this.$('#season-ladder .ladder-team').eq(1).find('.games-lost').text().trim(), ladderTeam2.gamesLost);
  assert.equal(this.$('#season-ladder .ladder-team').eq(1).find('.games-drawn').text().trim(), ladderTeam2.gamesDrawn);
  assert.equal(this.$('#season-ladder .ladder-team').eq(1).find('.team-percentage').text().trim(), ladderTeam2.prettyPercentage);

  assert.equal(this.$('#season-ladder .ladder-team').eq(2).find('.team-name').text().trim(), ladderTeam3.team.name);
  assert.equal(this.$('#season-ladder .ladder-team').eq(2).find('.games-played').text().trim(), ladderTeam3.gamesPlayed);
  assert.equal(this.$('#season-ladder .ladder-team').eq(2).find('.games-won').text().trim(), ladderTeam3.gamesWon);
  assert.equal(this.$('#season-ladder .ladder-team').eq(2).find('.games-lost').text().trim(), ladderTeam3.gamesLost);
  assert.equal(this.$('#season-ladder .ladder-team').eq(2).find('.games-drawn').text().trim(), ladderTeam3.gamesDrawn);
  assert.equal(this.$('#season-ladder .ladder-team').eq(2).find('.team-percentage').text().trim(), ladderTeam3.prettyPercentage);
});
