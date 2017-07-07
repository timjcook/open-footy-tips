import { moduleForModel, test } from 'ember-qunit';

moduleForModel('ladder-team', 'Unit | Model | ladder team', {
  needs: ['model:ladder', 'model:team']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
