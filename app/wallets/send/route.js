import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  async afterModel(model) {
    const overviewController = this.controllerFor('wallets/overview');
    await get(model, 'accounts');

    const source = get(overviewController, 'sortedAccounts.firstObject');
    return this.transitionTo('wallets.overview.accounts.account.send', source);
  },
});
