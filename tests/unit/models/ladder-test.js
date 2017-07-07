import { moduleForModel, test } from 'ember-qunit';

moduleForModel('ladder', 'Unit | Model | ladder', {
  needs: ['model:season', 'model:ladder-team']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
