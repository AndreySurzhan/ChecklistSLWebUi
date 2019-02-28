class ChecklistApi {
    constructor() {
        this.basicUrl = 'https://checklist-sl-api.herokuapp.com/api/checklist/';
        this.token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFuZHJlaSIsImlkIjoiNWM1YzU4MGE4Y2Y5N2UwMDE3OWY4ODFjIiwiaWF0IjoxNTUxMzU3NzUyLCJleHAiOjE1NTE0MDA5NTJ9.uUv7_IDuL8K2y-4o1aakkVZ4vEcYyrvPEkN3NA7g5T8";
        this.headers = {
            mode: 'no-cors',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.token
        };
    }

    async creatChecklist(checklist) {
        try {
            const response = await fetch(this.basicUrl, {
                headers: this.headers,
                method: 'POST',
                body: JSON.stringify(checklist)
            });
            if (!response.ok) {
                throw new Error('API error');
            }
            return response.json();
        } catch (e) {
            throw e;
        }
    }

    async getAllChecklists() {
        try {
            const response = await fetch(this.basicUrl, {
                headers: this.headers,
                method: 'GET'
            });
            if (!response.ok) {
                throw new Error('API error');
            }
            return response.json();
        } catch (e) {
            throw e;
        }
    }

    async deleteChecklistById(id) {
        try {
            const response = await fetch(this.basicUrl, {
                headers: this.headers,
                method: 'DELETE'
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

export default ChecklistApi;