import AxiosClient from "./axiosClient";
const USER_URL = '/customers'
const CustomerApi = {
   createCustomer: (data) => {
      return AxiosClient.post(USER_URL + '/create', data);
   },
   showCustomer: () => {
      return AxiosClient.get(USER_URL + '/show_customer');
   },
   deleteCustomer: (id) => {
      return AxiosClient.delete(USER_URL + '/delete/' + id);
   }
   // waiting
   // requesting
   // successful
}

export default CustomerApi;
