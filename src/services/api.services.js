import axios1 from './axios.customize';

const createUserAPI = (fullName, email, passWord, phone) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        fullName: fullName,
        email: email,
        password: passWord,
        phone: phone
    }
    return axios1.post(URL_BACKEND, data)

}
const updateUserAPI = (_id, fullName, phone) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        _id: _id,
        fullName: fullName,
        phone: phone
    }
    return axios1.put(URL_BACKEND, data)

}

const fetchAllUserAPI = () => {
    const URL_BACKEND = "/api/v1/user";
    return axios1.get(URL_BACKEND)
}


export { createUserAPI, updateUserAPI, fetchAllUserAPI}