import Controller from '@ember/controller';
import { sort } from 'ember-decorators/object/computed';
import { computed } from 'ember-decorators/object';

export default Controller.extend({
  accounts: null,

  @sort('model.accounts', 'sortBy') sortedAccounts: null,

  @computed
  get sortBy() {
    // Fallback to sorting by `id` for stable sort.
    return ['modifiedTimestamp', 'id'];
  },
});
