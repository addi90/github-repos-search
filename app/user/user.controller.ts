;((): void => {
  'use strict';

  angular
    .module('user')
    .controller('UserController', UserController);

  UserController.$inject = ['UserService'];

  function UserController (UserService: user.IUserService) {
    let vm = this;

    init();

    function init () {
      angular.merge(vm, {
        userName: '',
        search
      });
    }

    function search () {
      //TODO: Add pagination capability to the search. By default only first page is returned

      vm.isSearching = true;
      vm.errorMessage = '';
      UserService.getUserRepos(vm.userName)
        .then(successHandler)
        .catch(errorHandler)
        .finally(() => vm.isSearching = false);

      function successHandler (response) {
        vm.repoList = response;
        if (vm.repoList.length === 0) {
          vm.errorMessage = ` No repo found for requested user ${vm.userName} on Github`
        }
      }

      function errorHandler (error) {
        let { data, status } = error;
        vm.repoList.length = 0;
        switch (status) {
          case common.constants.HttpStatus.NotFound:
            vm.errorMessage = `Requested user ${vm.userName} not found on Github`;
            break;
          default:
            vm.errorMessage = data.message;
        }
      }
    }

  }
})();