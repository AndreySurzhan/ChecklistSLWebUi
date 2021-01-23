import Api from './api';

class LanguageApi extends Api {    
    async getAllLanguages() {
        return await this.request(null, 'GET', `${this.basicUrl}/language`, true);
    }
}

export default LanguageApi;
