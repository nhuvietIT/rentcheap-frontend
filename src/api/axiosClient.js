import axios from 'axios';
import queryString from 'query-string';
import localStorageUtils from "@/utils/utils_local_storage";
const localStorage = localStorageUtils.getService();
const token = localStorage.getToken();
const AxiosClient = axios.create({
    baseURL: process.env.VUE_APP_RENTCHEAP_SERVER,
    headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`
    },
    paramsSerializer: params => queryString.stringify(params),
});

AxiosClient.interceptors.request.use(async (config) => {
    return config;
});

AxiosClient.interceptors.response.use(async (response) => {
    if (response && response.data) {
        return response.data;
    }

    return response;
}, (error) => {
    throw error;
});

export default AxiosClient; 
