import AxiosClient from "./axiosClient";
const USER_URL = '/customers'
const CustomerApi = {
   createCustomer: (data) => {
      return AxiosClient.post(USER_URL + '/create', data);
   },
   showCustomer: () => {
      return AxiosClient.get(USER_URL + '/show_customer');
   }
   // waiting
   // requesting
   // successful
}

export default CustomerApi;
