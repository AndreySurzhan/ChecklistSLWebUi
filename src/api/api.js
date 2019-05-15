export default class Api {
    constructor() {
        this.basicUrl = process.env.REACT_APP_API_URL;
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

        if (token) {
            this.headers.Authorization = 'Bearer ' + token;
        } else {
            throw new Error("Token doesn't exist");
        }
    }

    async request(data, method, url, isAuthRequired) {
        try {
            if (isAuthRequired) {
                this.setAuthHeader();
            }

            const response = await fetch(url, {
                headers: this.headers,
                method,
                body: data !== null ? JSON.stringify(data) : undefined
            });

            if (!response.ok) {
                const message = `[API error] "${method}" request to "${url}" returns "${response.status}"`;

                throw new Error(message);
            }
            return response.json();
        } catch (e) {
            throw e;
        }
    }
}
