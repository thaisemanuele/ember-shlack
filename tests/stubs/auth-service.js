import Service from '@ember/service';
import { inject as service } from '@ember/service';
import Router from '@ember/routing/router';


export default class MockAuthService extends Service {
    
    /**
     * @type {Router}
     */
    @service router;

    currentUserId = null;

    loginWithUserId(userId) {
        this.currentUserId = userId;
        this.router.transitionTo('teams');
    }
}