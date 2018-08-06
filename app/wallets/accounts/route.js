import Route from '@ember/routing/route';

import KeyboardShortcuts from 'ember-keyboard-shortcuts/mixins/route';
import { computed, action } from 'ember-decorators/object';

export default Route.extend(KeyboardShortcuts, {
  renderTemplate() {
    this.render('wallets.accounts', {
      into: 'wallets',
    });
  },

  @computed
  get keyboardShortcuts() {
    return {
      esc: {
        action: 'returnHome',
        scoped: true,
      },
    };
  },
  @action
  returnHome() {
    return this.transitionTo('wallets.overview');
  },
});
