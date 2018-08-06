import Route from '@ember/routing/route';

import { action } from 'ember-decorators/object';
import { service } from 'ember-decorators/service';

export default Route.extend({
  @service intl: null,
  @service flashMessages: null,

  renderTemplate() {
    this.render('wallets.overview', {
      into: 'wallets',
    });
  },

  @action
  changeSlide(slide) {
    return this.transitionTo({ queryParams: { slide } });
  },

  @action
  changeCurrency(currency) {
    return this.transitionTo({ queryParams: { currency } });
  },
});
