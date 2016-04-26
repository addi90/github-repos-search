;((): void => {
  'use strict';

  angular
    .module('app')
    .config(config);

  config.$inject = ['$stateProvider', '$httpProvider', '$urlRouterProvider'];

  function config (
    $stateProvider: ng.ui.IStateProvider,
    $httpProvider: ng.IHttpProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider
  ) {
    $httpProvider.interceptors.push('HttpInterceptorService');

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'UserController as vm',
        templateUrl: 'user/user.html'
      });

    $urlRouterProvider.otherwise('/');
  }
})();
