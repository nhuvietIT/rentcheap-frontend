import getterTypes from './getter_types';
const getters = {
  [getterTypes.GET_DETAIL_BY_ID]: (state) => state.projectDetail,
  [getterTypes.GET_PROJECT]: (state) => state.project,
  [getterTypes.GET_ALL_PROJECTS]: (state) => state.allProjects,
};

export default getters;
