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

    setAuthHeader() {
        const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null;

        if(token) {
            this.headers.Authorization = 'Bearer ' + token;
        } else {
            throw new Error('Token doesn\'t exist');
        }
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