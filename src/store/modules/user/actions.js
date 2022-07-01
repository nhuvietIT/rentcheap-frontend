import mutationsType from './mutation_types';
import snackbarActions from '@/store/app/action_types';
import actionType from './action_types';
import { getAll, signup } from '@/api/api_user';
import MESSAGE from '@/utils/utils_message';

const actions = {
  [actionType.ACT_LOGIN]: ({ commit }, val) => {
    commit(mutationsType.MUTATE_LOGIN, val);
  },
  [actionType.ACT_GET_ALL]: async ({ commit }, val) => {
    try {
      const res = await getAll(val?.currentPage, val?.pageSize);
      commit(mutationsType.MUTATE_SET_LIST_USERS, res.data.users);
    } catch (error) {
      commit(snackbarActions.SET_SNACKBAR, {
        type: 'error',
        visible: true,
        text: MESSAGE.ERROR_GET_DATA,
      });
    }
  },
  [actionType.ACT_SIGNOUT]: ({ commit }, val) => {
    commit(mutationsType.MUTATE_SIGNOUT, val);
  },
  [actionType.ACT_SIGNUP]: async (context, newUser) => {
    return await signup(newUser);
  },
};
export default actions;
