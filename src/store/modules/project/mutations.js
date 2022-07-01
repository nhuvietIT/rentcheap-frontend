import mutationTypes from './mutation_types';

const mutations = {
  [mutationTypes.SET_DETAIL_BY_ID]: (state, projectDetail) => {
    state.projectDetail = projectDetail;
  },
  [mutationTypes.SET_PROJECT]: (state, project) => {
    state.project = project;
  },
  [mutationTypes.SET_INITIAL_PROJECT]: (state) => {
    state.project = {
      project_name: '',
      start_date: '',
      end_date: '',
      pm: null,
    };
  },
  [mutationTypes.SET_ALL_PROJECTS]: (state, allProjects) => {
    state.allProjects = allProjects;
  },
};

export default mutations;
