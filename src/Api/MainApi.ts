import axios from "axios";

export default class MainApi {
    static async getAll() {
        try {
            const response = await axios.get("https://baginz.github.io/messenger/db.json");
            return response;
        } catch (error: any) {
            return error.message;
        }
    }
}
