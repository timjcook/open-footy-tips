import { moduleForModel, test } from 'ember-qunit';

moduleForModel('season', 'Unit | Model | season', {
  needs: ['model:round']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
