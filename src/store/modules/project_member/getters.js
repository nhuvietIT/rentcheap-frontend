import getterTypes from './getter_types';
const getters = {
  [getterTypes.GET_BY_PROJECT_ID]: state => state.projectMembers,
  [getterTypes.GET_BY_PROJECT_USER_ID]: state => state.member
};

export default getters;
