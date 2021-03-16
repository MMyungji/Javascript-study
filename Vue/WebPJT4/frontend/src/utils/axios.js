const axios = require('axios');

const api = axios.create({
    baseURL: "http://localhost:8000/api"
});

export const dataLap = {
    get: () => {
        return api.get("/data")
    },
    post: (data) => {
        return api.post("/data",data)
    },
    delete: () => {
        return api.delete("/data")
    }
}