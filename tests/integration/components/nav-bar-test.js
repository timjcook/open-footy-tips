import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nav-bar', 'Integration | Component | nav bar', {
  integration: true
});

test('it renders with logo, heading and current season', function(assert) {
  assert.expect(3);

  this.render(hbs`{{nav-bar}}`);
  assert.ok(!!this.$('#nav-bar .left .logo img').length, 'should have logo image is present');
  assert.equal(this.$('#nav-bar .left .heading').text().trim(), 'OpenFooty - Tagline', 'should have the open footy headline');
  assert.equal(this.$('#nav-bar .right .item.season').text().trim(), 'Season 2017', 'should have current season');
});
