class ChecklistApi {
    constructor() {
        this.basicUrl = 'https://checklist-sl-api.herokuapp.com/api/checklist';
        this.token = localStorage.getItem('token');
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

    async updateChecklist(checklist) {
        try {
            const response = await fetch(`${this.basicUrl}/${checklist._id}`, {
                headers: this.headers,
                method: 'PATCH',
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

    async deleteChecklist(checklist) {
        try {
            const response = await fetch(`${this.basicUrl}/${checklist._id}`, {
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

    async addItem(checklistId, item) {
        try {
            const response = await fetch(`${this.basicUrl}/${checklistId}/item`, {
                headers: this.headers,
                method: 'PUT',
                body: JSON.stringify(item)
            });
            if (!response.ok) {
                throw new Error('API error');
            }
            return response.json();
        } catch (e) {
            throw e;
        }
    }

    async updateItem(checklistId, item) {
        try {
            const response = await fetch(`${this.basicUrl}/${checklistId}/item/${item._id}`, {
                headers: this.headers,
                method: 'PATCH',
                body: JSON.stringify(item)
            });
            if (!response.ok) {
                throw new Error('API error');
            }
            return response.json();
        } catch (e) {
            throw e;
        }
    }

    async deleteItem(checklistId, item) {
        try {
            const response = await fetch(`${this.basicUrl}/${checklistId}/item/${item._id}`, {
                headers: this.headers,
                method: 'DELETE',
                body: JSON.stringify(item)
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