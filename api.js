import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000"

})

export const mainApi ={
    totalbbs: () => api.get("/bbs/"),
    psat: () => api.get(`/bbs/category/psat`),
    ncs: () => api.get(`/bbs/category/ncs`)
}