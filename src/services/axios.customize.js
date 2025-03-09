import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080'
});
export default instance;

instance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});
instance.interceptors.response.use(function (response) {
    if (response.data && response.data.data) { return response.data; }
    return response
}, function (error) {
   
    if (error.response.data && error.response.data.message) { return error.response.data; }
    return error.response;
});
