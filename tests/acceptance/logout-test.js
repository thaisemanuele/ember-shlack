import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import MockAuthService from '../stubs/auth-service';

module('Acceptance | loggging out', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:auth', MockAuthService);
  });

  test('visiting /teams/team and clicking logout', async function(assert) {
    this.owner.lookup('service:auth').currentUserId = '1';
    await visit('/teams/linkedin'); //Go to the team url
    assert.ok(currentURL().startsWith('/teams'));
    
    await click('.team-sidebar__logout-button'); //Click Logout button
    assert.equal(currentURL(), '/login');

  });
});
