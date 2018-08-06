import Component from '@ember/component';
import { get } from '@ember/object';
import { tryInvoke } from '@ember/utils';


import { service } from 'ember-decorators/service';
import { action } from 'ember-decorators/object';

import { storageFor } from 'ember-local-storage';
import BigNumber from 'npm:bignumber.js';
import ChangeAccountSettingsValidations from '../../validations/change-account-settings';

export default Component.extend({
  ChangeAccountSettingsValidations,

  settings: storageFor('settings', 'account'),

  @service flashMessages: null,
  @service intl: null,

  account: null,
  truncate: false,

  editingLabel: false,

  @action
  editLabel() {
    this.toggleProperty('editingLabel');
  },

  @action
  async changeAccountState(state) {
    console.log('changeAccountState :: ', state);
    const settings = this.get('settings');
    const account = this.get('account');
    const flashMessages = this.get('flashMessages');

    console.log(settings);

    if (state === 'archived') {
      const balance = new BigNumber(account.balance);
      const pending = new BigNumber(account.pending);
      // if account has pending

      if (balance.gt(0) || pending.gt(0)) {
        console.log(balance);
        flashMessages.danger('cant if balance');
        return false;
      }
      await tryInvoke(settings, 'setProperties', [{ state }]);
      console.log('archive, account :: ', this.get('account'));
      //
    } else if (state === 'hidden') {
      flashMessages.success('hidden');
      await tryInvoke(settings, 'setProperties', [{ state }]);
    } else {
      flashMessages.success('account now show main screen');
      await tryInvoke(settings, 'setProperties', [{ state }]);
    }
    return true;
  },

  @action
  async updateLabel(changeset) {
    console.log('updateLabel :: changeset', changeset);
    const label = get(changeset, 'label');
    const settings = this.get('settings');
    console.log(label);

    await tryInvoke(settings, 'setProperties', [{ label }]);
    this.toggleProperty('editingLabel');
  },

  @action
  check() { console.log('check :: true '); return true; },
});
