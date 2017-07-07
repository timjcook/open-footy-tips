import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

const { Object: EmberObject } = Ember;

moduleFor('route:dashboard', 'Unit | Route | dashboard', {
});

test('it returns a model with current season, ladder, all season rounds and the default current round', function(assert) {
  assert.expect(5);

  let currentRound = {
    roundNumber: 1
  };
  let rounds = [
    currentRound,
    { roundNumber: 2 }
  ];

  let ladder = {
    id: 'ladder123'
  };

  let season = new EmberObject({
    year: 2017,
    ladder,
    rounds
  });

  let route = this.subject();
  route.modelFor = (routeName) => {
    assert.equal(routeName, 'application', 'should request the application route model');

    return {
      season
    };
  };

  route.model().then((model) => {
    route.afterModel(model, { queryParams: {} });

    assert.equal(model.season.year, season.year);
    assert.equal(model.ladder.id, ladder.id);
    assert.deepEqual(model.rounds, rounds);
    assert.equal(model.currentRound.roundNumber, currentRound.roundNumber);
  });
});

test('it returns a model with current season, ladder, all season rounds and the current round based on query params', function(assert) {
  assert.expect(5);

  let currentRound = {
    roundNumber: 2
  };
  let rounds = [
    { roundNumber: 1 },
    currentRound
  ];
  let ladder = {
    id: 'ladder123'
  };

  let season = new EmberObject({
    year: 2017,
    ladder,
    rounds
  });

  let route = this.subject();
  route.modelFor = (routeName) => {
    assert.equal(routeName, 'application', 'should request the application route model');

    return {
      season
    };
  };

  route.model().then((model) => {
    route.afterModel(model, { queryParams: { roundNumber: currentRound.roundNumber } });

    assert.equal(model.season.year, season.year);
    assert.equal(model.ladder.id, ladder.id);
    assert.deepEqual(model.rounds, rounds);
    assert.equal(model.currentRound.roundNumber, currentRound.roundNumber);
  });
});
