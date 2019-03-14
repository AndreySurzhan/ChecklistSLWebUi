class UserApi {
    constructor() {
        this.basicUrl = 'https://checklist-sl-api.herokuapp.com/api';
        this.headers = {
            mode: 'no-cors',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            Accept: 'application/json',
            'Content-Type': 'application/json'
        };
    }

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
            //TODO: remove line when login is implemented
            const token = response.text();
            this.headers.Authorization = 'Bearer ' + token;
            
            return token;
        } catch (e) {
            throw e;
        }
    }

    async register(user) {
        try {
            const response = await fetch(`${this.basicUrl}/register`, {
                headers: this.headers,
                method: 'POST',
                body: JSON.stringify(user)
            });
            if (!response.ok) {
                throw new Error('API error');
            }
            //TODO: remove line when login is implemented
            this.headers.Authorization = 'Bearer ' + response.json().token;
            return response.json();
        } catch (e) {
            throw e;
        }
    }
}

export default UserApi;