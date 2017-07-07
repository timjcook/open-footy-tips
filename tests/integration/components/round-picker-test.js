import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('round-picker', 'Integration | Component | round picker', {
  integration: true
});

test('it renders all passed in rounds and highlights current round', function(assert) {
  assert.expect(4);

  let round1 = { roundNumber: 1 };
  let round2 = { roundNumber: 2 };
  let round3 = { roundNumber: 3 };

  this.set('rounds', [
    round1,
    round2,
    round3
  ]);
  this.set('currentRound', round2);
  this.set('selectRound', '');
  this.render(hbs`{{round-picker rounds=rounds currentRound=currentRound selectRound=selectRound}}`);

  assert.equal(this.$('#round-picker .round-picker-item.heading').text().trim(), 'Round');
  assert.equal(this.$('#round-picker .round-picker-item.number').length, 3);
  assert.equal(this.$('#round-picker .round-picker-item.number.selected').length, 1);
  assert.equal(this.$('#round-picker .round-picker-item.number.selected').text().trim(), round2.roundNumber);
});

test('it will send the selectRound action when a round number is clicked', function(assert) {
  assert.expect(1);

  let round1 = { roundNumber: 1 };
  let round2 = { roundNumber: 2 };
  let round3 = { roundNumber: 3 };

  this.set('rounds', [
    round1,
    round2,
    round3
  ]);
  this.set('currentRound', round2);

  this.set('selectRound', function(round) {
    assert.deepEqual(round, round3);
  });
  this.render(hbs`{{round-picker rounds=rounds currentRound=currentRound selectRound=(action selectRound)}}`);

  this.$('#round-picker .round-picker-item.number').eq(2).click();
});
