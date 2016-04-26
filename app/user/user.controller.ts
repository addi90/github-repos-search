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
      vm.isSearching = true;
      UserService.getUserRepos(vm.userName)
        .then(successHandler)
        .catch(errorHandler)
        .finally(() => vm.isSearching = false);

      function successHandler (response) {
        vm.repoList = response;
      }

      function errorHandler (error) {
        vm.error = error;
      }
    }

  }
})();