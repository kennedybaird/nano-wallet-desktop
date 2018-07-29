import Route from '@ember/routing/route';

import { service } from 'ember-decorators/service';
import { action } from 'ember-decorators/object';

export default Route.extend({
  @service intl: null,
  @service flashMessages: null,

  renderTemplate() {
    this.render('wallets/overview/accounts/account/settings', {
      into: 'wallets',
      outlet: 'modal',
    });
  },
  @action
  save() {
    const message = this.get('intl').t('accountSettingsSaved');
    this.get('flashMessages').success(message);
    return this.transitionTo('wallets.overview');
  },

  @action
  cancel() {
    return this.transitionTo(window.history.back());
  },
});
