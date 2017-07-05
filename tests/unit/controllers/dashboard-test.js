import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:dashboard', 'Unit | Controller | dashboard', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it initializes with the first round of the season', function(assert) {
  assert.expect(1);

  let round1 = {
    roundNumber: 1
  };
  let round2 = {
    roundNumber: 2
  };
  let round3 = {
    roundNumber: 3
  };

  let controller = this.subject({
    model: {
      rounds: [
        round1,
        round2,
        round3
      ]
    }
  });

  assert.deepEqual(controller.get('currentRound'), round1);
});

test('it will update the current round when action is fired', function(assert) {
  assert.expect(1);

  let round1 = {
    roundNumber: 1
  };
  let round2 = {
    roundNumber: 2
  };
  let round3 = {
    roundNumber: 3
  };

  let controller = this.subject({
    model: {
      rounds: [
        round1,
        round2,
        round3
      ]
    }
  });

  controller.send('selectRound', round2);
  assert.deepEqual(controller.get('currentRound'), round2);
});
