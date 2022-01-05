import axios from "axios";

export default class MainApi {
    static async getAll() {
        try {
            const response = await axios.get('http://localhost:3000/db.json')    
            return response;
        } catch (error: any) {
            return error.message;
        }
    }
}