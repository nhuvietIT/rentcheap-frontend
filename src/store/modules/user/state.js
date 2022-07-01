import localStorageUtils from '@/utils/utils_local_storage';

const state = () => ({
  current: localStorageUtils.getToken() || null,
  listUsers: null,
});

export default state;
