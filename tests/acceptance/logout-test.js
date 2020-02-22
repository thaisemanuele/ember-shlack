import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import MockAuthService from '../stubs/auth-service';

module('Acceptance | loggging out', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:auth', MockAuthService);
  });

  test('visiting /teams and clicking logout', async function(assert) {
    await visit('/teams'); //Go to the teams url
    assert.equal(currentURL(), '/teams');
    
    await click('.team-sidebar__logout-button'); //Click Logout button
    assert.equal(currentURL(), '/login');

  });
});
