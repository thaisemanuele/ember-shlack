import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class LoginFormComponent extends Component {
    
    @tracked
    userId = null;

    get isDisabled() {
        return !this.userId;
    }

    loginAsUserWithId(val) {
        console.log('UserId: ', val);
    }
    
    /**
     * 
     * @param {Event & { target: HTMLSelectElement}} evt 
     */
    @action
    onSelectChanged(evt) {
        this.userId = evt.target.value;
    }

    /**
     * @param {Event & {target: HTMLFontElement}} evt
     */
    @action
    onLoginFormSubmit(evt) {
        const { target } = evt;
        const val = target.querySelector('select').value;
        evt.preventDefault();
        this.loginAsUserWithId(val);
    }


}
