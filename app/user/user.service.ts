;((): void => {
  'use strict';

  angular
    .module('user')
    .factory('UserService', UserService);

  UserService.$inject = ['$http'];

  function UserService (
    $http: ng.IHttpService
  ): user.IUserService {

    return {
      getUserRepos
    };

    /**
     * Get user repositories from Github using username
     * @param userName
     */
    function getUserRepos(userName: string): any {
      let userReposPath = `${common.constants.apiUrl}/users/${userName}/repos`;
      return $http.get(userReposPath)
          .then((response: any) => {
            let { data } = response;
            return data.map((item) => {
              const { id = '', name = '', full_name = '', html_url = '', description = '' } = item;
              return { id, name, full_name, html_url, description, isStarred: false };
            })
          });
    }
  }
})();