import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000"

})

export const mainApi ={
    totalbbs: () => api.get("/bbs/"),
    psat: () => api.get(`/bbs/category/psat`),
    ncs: () => api.get(`/bbs/category/ncs`),
    detail: id => api.get(`/detail/${id}`)

}

//MainPage get Detail Api(Latest, psat, ncs) 
export const getApi = {
    getpsat: term =>
        api.get(`psat/${_id}`, {
            params: {
                query: encodeURIComponent(term)
            }
        }),
    getncs: term =>
        api.get(`ncs/${_id}`, {
            params: {
                query: encodeURIComponent(term)
            }
        }),
    getlatest: term =>
        api.get(`bbs/latest/${_id}`, {
            params: {
                query: encodeURIComponent(term)
            }
        })

}

export const searchApi ={
    searchpsat: term => 
        api.get("searchpsat", {
            params: {
                query: encodeURIComponent(term)
            }
        })
    ,
    searchncs: term => 
        api.get("searchncs", {
            params: {
                query: encodeURIComponent(term)
            }
        }),
    searchnotice: term => 
        api.get("searchnotice", {
            params: {
                query: encodeURIComponent(term)
            }
        }),
    searchnews: term => 
        api.get("searchnews", {
            params: {
                query: encodeURIComponent(term)
            }
        }),
    searchworkbook: term => 
        api.get("searchworkbook", {
            params: {
                query: encodeURIComponent(term)
            }
        })
}


