import Api from './api';

class ChecklistApi extends Api {

    async creatChecklist(checklist) {
        try {
            this.setAuthHeader();

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
            this.setAuthHeader();

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
            this.setAuthHeader();

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
            this.setAuthHeader();
            
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
            this.setAuthHeader();

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
            this.setAuthHeader();
            
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
            this.setAuthHeader();
            
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