import Component from '@ember/component';
import { computed } from 'ember-decorators/object';

export default Component.extend({

  @computed
  get options() { return ['normal', 'hidden', 'archived']; },

  state: null,
  changeAccountState: null,
});
