const localStorageUtils = (function() {
  let _service;
  function _getService() {
    if (!_service) {
      _service = this;
    }
    return _service;
  }

  function _setToken(userToken) {
    localStorage.setItem('access_token', userToken);
  }

  function _setRefreshToken(refreshToken) {
    localStorage.setItem('refresh_token', refreshToken);
  }

  function _getToken() {
    return localStorage.getItem('access_token');
  }

  function _getRefreshToken() {
    return localStorage.getItem('refresh_token');
  }

  function _clearToken() {
    localStorage.removeItem('access_token');
  }

  function _clearRefreshToken() {
    localStorage.removeItem('refresh_token');
  }

  function _setCurrentUser(user) {
    return localStorage.setItem('current_user', user);
  }

  function _getCurrentUser() {
    return localStorage.getItem('current_user');
  }

  function _clearCurrentUser() {
    localStorage.removeItem('current_user');
  }

  function _setName(name) {
    localStorage.setItem('name', name);
  }

  function _getName() {
    return localStorage.getItem('name');
  }

  function _clearName() {
    return localStorage.removeItem('name');
  }

  return {
    getService: _getService,
    setToken: _setToken,
    getToken: _getToken,
    setRefreshToken: _setRefreshToken,
    getRefreshToken: _getRefreshToken,
    clearToken: _clearToken,
    clearRefreshToken: _clearRefreshToken,
    setCurrentUser: _setCurrentUser,
    getCurrentUser: _getCurrentUser,
    clearCurrentUser: _clearCurrentUser,
    getName: _getName,
    setName: _setName,
    clearName: _clearName
  };
})();

export default localStorageUtils;
