import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000"

})

export const bbsApi ={
    Totalbbs: () => api.get("/bbs/")
}