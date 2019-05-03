import Api from './api';

class ChecklistApi extends Api {
    constructor() {
        super();
        
        this.basicUrl = `${this.basicUrl}/checklist`
    }

    async creatChecklist(checklist) {
        return await this.request(checklist, 'POST', this.basicUrl, true);
    }

    async updateChecklist(checklist){
        return await this.request(checklist, 'PATCH',`${this.basicUrl}/${checklist._id}`, true);
    }
    
    async getAllChecklists() {
        return await this.request(null, 'GET', this.basicUrl, true)
    }

    async deleteChecklist(checklist) {
        return await this.request(null, 'DELETE', `${this.basicUrl}/${checklist._id}`, true)
    }

    async addItem(checklistId, item){
        return await this.request(item, 'PUT',`${this.basicUrl}/${checklistId}/item`, true);
    }

    async updateItem(checklistId, item){
        return await this.request(item, 'PATCH',`${this.basicUrl}/${checklistId}/item/${item._id}`, true);
    }

    async deleteItem(checklistId, item) {
        return await this.request(null, 'DELETE', `${this.basicUrl}/${checklistId}/item/${item._id}`, true)
    }
}

export default ChecklistApi;
