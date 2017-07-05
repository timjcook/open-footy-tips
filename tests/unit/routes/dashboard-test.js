import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

const { Object: EmberObject } = Ember;

moduleFor('route:dashboard', 'Unit | Route | dashboard', {
});

test('it returns a model with current season and all season rounds', function(assert) {
  assert.expect(3);

  let rounds = [{
    roundNumber: 1
  }, {
    roundNumber: 2
  }];

  let season = new EmberObject({
    year: 2017,
    rounds
  });

  let route = this.subject();
  route.modelFor = (routeName) => {
    assert.equal(routeName, 'application', 'should request the appication route model');

    return {
      season
    };
  };

  route.model().then((model) => {
    assert.equal(model.season.year, season.year);
    assert.deepEqual(model.rounds, rounds);
  });
});
