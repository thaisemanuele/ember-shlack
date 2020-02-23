import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class TeamsTeamChannelRoute extends Route {
    async model({ channelId }) {
        //this.modelFor('team');
        const { teamId } = this.paramsFor('teams.team');
        const response = await fetch(`/api/teams/${teamId}/channels/${channelId}`);
        return await response.json();
    }
}
