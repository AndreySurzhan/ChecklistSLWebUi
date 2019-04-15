import Api from './api';

class UserApi extends Api {

    async login(user) {
        try {
            const response = await fetch(`${this.basicUrl}/login`, {
                headers: this.headers,
                method: 'POST',
                body: JSON.stringify(user)
            });
            if (!response.ok) {
                throw new Error('API error');
            }
            
            return response.json();
        } catch (e) {
            throw e;
        }
    }

    async register(user) {
        try {
            const response = await fetch(`${this.basicUrl}/registration`, {
                headers: this.headers,
                method: 'POST',
                body: JSON.stringify(user)
            });
            if (!response.ok) {
                throw new Error('API error');
            }

            return response.json();
        } catch (e) {
            throw e;
        }
    }

    async updateUser(user) {
        try {
            this.setAuthHeader();
            
            const response = await fetch(`${this.basicUrl}/user`, {
                headers: this.headers,
                method: 'PATCH',
                body: JSON.stringify(user)
            });
            if (!response.ok) {
                throw new Error('API error');
            }

            return response.json();
        } catch (e) {
            throw e;
        }
    }
}

export default UserApi;