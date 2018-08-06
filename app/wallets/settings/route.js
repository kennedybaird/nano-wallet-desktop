import Route from '@ember/routing/route';

import { action } from 'ember-decorators/object';

export default Route.extend({
  renderTemplate() {
    this.render('wallets.settings', {
      into: 'wallets',
    });
  },

  @action
  cancel() {
    return this.transitionTo('wallets.overview');
  },
});
