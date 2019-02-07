class ChecklistApi {
    constructor() {
        this.basicUrl = 'https://checklist-sl-api.herokuapp.com/api/checklist/';
        this.token =
            '';
        this.headers = {
            mode: 'no-cors',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Credentials': true,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token
        };

        console.log(this.headers);
    }

    async creatChecklist(checklist) {
        try {
            let response = await fetch(this.basicUrl, {
                headers: this.headers,
                method: 'POST',
                body: JSON.stringify(checklist)
            });

            return await response.json();
        } catch (e) {
            console.log(e);
        }
    }

    async getAllChecklists() {
        try {
            return await fetch(this.basicUrl, {
                headers: this.headers,
                method: 'GET'
            });
        } catch (e) {
            console.log(e);
        }
    }

    async deleteChecklistById(id) {
        try {
            return await fetch(this.basicUrl + id, {
                headers: this.headers,
                method: 'DELETE'
            });
        } catch (e) {
            console.log(e);
        }
    }
}

export default ChecklistApi;
