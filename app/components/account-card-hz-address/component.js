import Component from '@ember/component';

import { service } from 'ember-decorators/service';
import { action } from 'ember-decorators/object';

export default Component.extend({
  @service flashMessages: null,
  @service intl: null,

  account: null,
  mouseOver: true,

  @action
  copyAddress(address) {
    const intl = this.get('intl');
    const flashMessages = this.get('flashMessages');
    flashMessages.success(intl.t('addressCopied', { address }));
    return true;
  },

  mouseEnter() {
    this.set('mouseOver', false);
  },

  mouseLeave() {
    this.set('mouseOver', true);
  },
});
