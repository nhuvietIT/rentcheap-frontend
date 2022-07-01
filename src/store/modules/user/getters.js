import gettersType from './getter_types';

const getters = {
  [gettersType.GET_CURRENT_USER]: (state) => state.current,
  [gettersType.GET_LIST_USERS]: (state) => state.listUsers,
};

export default getters;
