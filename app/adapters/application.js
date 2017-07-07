import Ember from 'ember';
import DS from 'ember-data';

const { ENV } = Ember;
const { JSONAPIAdapter } = DS;

export default JSONAPIAdapter.extend({

  host: ENV.api.host,

  namespace: ENV.api.namespace

});
