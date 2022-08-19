import AxiosClient from "./axiosClient";
const USER_URL = '/users'
const UserApi = {
    signup: (data) => {
        return AxiosClient.post(USER_URL + '/signup', data);
    },
    signin: (data) => {
        return AxiosClient.post(USER_URL + '/signin', data);
    },
    showUser: () => {
        return AxiosClient.get(USER_URL + '/show_user');
    },
    resetPassWord: (email) => {
        return AxiosClient.post(USER_URL + '/resetpassword', email);
    },
    changePassword: (code) => {
        return AxiosClient.post(USER_URL + '/changepassword', code);
    },
    updatePassword: (password) => {
        return AxiosClient.post(USER_URL + '/updatepassword', password);
    },
    updateUser: (user, checkUpdate) => {
        return AxiosClient.post(USER_URL + '/update_user', { inforUser: user, checkUpdate: checkUpdate });
    }

}

export default UserApi;
