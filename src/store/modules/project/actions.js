import actionTypes from './action_types';
import mutationTypes from './mutation_types';
import appMutationTypes from '@/store/app/mutation_types';
import {
  getDetailById,
  create,
  getById,
  update,
  getAll,
  deleteById,
} from '@/api/api_project';
import router from '@/router';
import MESSAGE from '@/utils/utils_message';

const actions = {
  [actionTypes.ACT_GET_DETAIL_BY_ID]: async (context, payload) => {
    let res = await getDetailById(
      payload.id,
      payload.pageIndex,
      payload.pageSize
    );
    if (res.status === 204) {
      return;
    }
    context.commit(mutationTypes.SET_DETAIL_BY_ID, res.data);
  },
  [actionTypes.ACT_CREATE]: async (context, payload) => {
    try {
      let res = await create(payload);
      if (res.status === 200) {
        router.push({ name: 'project-list' });
        context.commit('SET_SNACKBAR', {
          type: 'success',
          visible: true,
          text: res.statusText,
        });
        return;
      } else {
        context.commit('SET_SNACKBAR', {
          type: 'error',
          visible: true,
          text: res.statusText,
        });
      }
    } catch (error) {
      context.commit('SET_SNACKBAR', {
        type: 'error',
        visible: true,
        text: MESSAGE.SERVER_ERROR,
      });
    }
  },
  [actionTypes.ACT_GET_PROJECT_BY_ID]: async (context, payload) => {
    try {
      let res = await getById(payload.id);
      let project = res.data;
      const pm = project.users.find(user => user.project_member.role_id === 1);
      if (res.status === 200) {
        context.commit(mutationTypes.SET_PROJECT, { ...project, pm });
        return;
      }
      context.commit(mutationTypes.SET_PROJECT_BY_ID, res.data);
    } catch (error) {
      context.commit('SET_SNACKBAR', {
        type: 'error',
        visible: true,
        text: MESSAGE.SERVER_ERROR,
      });
    }
  },
  [actionTypes.ACT_UPDATE_PROJECT_BY_ID]: async (context, payload) => {
    try {
      const start = new Date(payload.data.start_date);
      const end = new Date(payload.data.end_date);
      if (start <= end) {
        let res = await update(payload.id, payload.data);
        if (res.status === 200) {
          context.commit('SET_SNACKBAR', {
            type: 'success',
            visible: true,
            text: res.statusText,
          });
          router.push('/project');
          return;
        } else {
          context.commit('SET_SNACKBAR', {
            type: 'success',
            visible: true,
            text: res.statusText,
          });
          return;
        }
      } else {
        context.commit('SET_SNACKBAR', {
          type: 'error',
          visible: true,
          text: MESSAGE.DATE_END_ERROR,
        });
        return;
      }
    } catch (error) {
      context.commit('SET_SNACKBAR', {
        type: 'error',
        visible: true,
        text: MESSAGE.SERVER_ERROR,
      });
    }
  },
  [actionTypes.ACT_FETCH_GET_ALL_PROJECTS]: async (context, payload) => {
    let res = await getAll(payload.page, payload.size);
    if (res.status === 204) {
      context.commit(mutationTypes.SET_ALL_PROJECTS, []);
      return;
    }
    context.commit(mutationTypes.SET_ALL_PROJECTS, res.data.projects);
  },
  [actionTypes.ACT_FETCH_DELETE_PROJECT]: async (context, payload) => {
    try {
      let res = await deleteById(payload.projectId);
      if (res.status === 400) {
        context.commit(appMutationTypes.SET_SNACKBAR, {
          type: 'warning',
          visible: true,
          text: res.statusText,
        });
        return;
      }
      context.commit(appMutationTypes.SET_SNACKBAR, {
        type: 'success',
        visible: true,
        text: res.statusText,
      });
      context.commit(appMutationTypes.SET_DELETE_RESULT, true);
    } catch (error) {
      if (error.response.status === 400) {
        context.commit(appMutationTypes.SET_SNACKBAR, {
          type: 'error',
          visible: true,
          text: error.response.statusText,
        });
      }
      context.commit(appMutationTypes.SET_DELETE_RESULT, false);
    }
  },
};

export default actions;
