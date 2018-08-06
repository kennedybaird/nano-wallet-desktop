export default function () {
  this.transition(
    this.hasClass('setup-step'),
    this.fromRoute('setup.index'),
    this.toRoute('setup.import'),
    this.use('toLeft', { duration: 100 }),
    this.reverse('toRight', { duration: 100 }),
  );

  this.transition(
    this.fromRoute('wallets.overview'),
    this.toRoute(['wallets.accounts.account.history', 'wallets.accounts']),
    this.use('toLeft', { duration: 200 }),
    this.reverse('toRight', { duration: 200 }),
  );
  this.transition(
    this.fromRoute('wallets.overview'),
    this.toRoute('wallets.settings'),
    this.use('toLeft', { duration: 200 }),
    this.reverse('toRight', { duration: 200 }),
  );

  this.transition(
    this.fromRoute(['wallets.accounts.account.history', 'wallets.accounts']),
    this.toRoute('wallets.settings'),
    this.use('toLeft', { duration: 200 }),
    this.reverse('toRight', { duration: 200 }),
  );

  this.transition(
    this.fromRoute('wallets.accounts'),
    this.toRoute('wallets.accounts.account.history'),
    this.use('toUp', { duration: 300 }),
    this.reverse('toDown', { duration: 300 }),
  );
}
