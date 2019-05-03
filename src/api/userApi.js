import Api from './api';

class UserApi extends Api {

    async login(user) {
        return await this.request(user, 'POST', `${this.basicUrl}/login`, false);
    }

    async register(user) {
        return await this.request(user, 'POST', `${this.basicUrl}/registration`, false);
    }

    async updateUser(user) {
        return await this.request(user, 'PATCH', `${this.basicUrl}/user`, true);
    }
}

export default UserApi;