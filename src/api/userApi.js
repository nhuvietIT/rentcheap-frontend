import AxiosClient from "./axiosClient";
const USER_URL = '/users'
const UserApi = {
    saveUser: (data) => { 
        return AxiosClient.post(USER_URL + '/save_user', data);
    },
    signin: (data) => { 
        return AxiosClient.post(USER_URL + '/signin', data);
    },

}

export default UserApi;
