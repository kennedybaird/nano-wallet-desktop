import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

// eslint-disable-next-line array-callback-return
Router.map(function routerMap() {
  this.route('start');

  this.route('setup', function setupRoute() {
    this.route('legal');
    this.route('download');
    this.route('start');
    this.route('import');
    this.route('backup');
    this.route('password', { path: '/:wallet_id' });
  });

  this.route('wallets', { path: '/:wallet_id' }, function walletsRoute() {
    this.route('send');
    this.route('logout');

    this.route('accounts', function accountsRoutes() {
      this.route('account', { path: '/:account_id' }, function accountRoutes() {
        this.route('send');
        this.route('history');
        this.route('settings');
      });
    });
    this.route('overview');
    this.route('settings');
  });

  this.route('login');
  this.route('logout');
  this.route('error');
});

export default Router;
