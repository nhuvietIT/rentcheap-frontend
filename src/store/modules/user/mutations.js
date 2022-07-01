import mutationsType from './mutation_types';
import localStorageUtils from '@/utils/utils_local_storage';

const mutations = {
  [mutationsType.MUTATE_LOGIN]: (state, val) => {
    state.current = val.userInfo;
    localStorageUtils.setCurrentUser(JSON.stringify(val.userInfo));
    localStorageUtils.setToken(val.userToken);
    localStorageUtils.setName(val.userInfo.name);
  },
  [mutationsType.MUTATE_SET_LIST_USERS]: (state, val) => {
    state.listUsers = val;
  },
  [mutationsType.MUTATE_SIGNOUT]: (state) => {
    state.current = {};
    localStorageUtils.clearToken();
    localStorageUtils.clearCurrentUser();
    localStorageUtils.clearName();
  }
};

export default mutations;
