import { moduleForModel, test } from 'ember-qunit';

moduleForModel('round', 'Unit | Model | round', {
  needs: ['model:season']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
