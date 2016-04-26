;
(function () {
    'use strict';
    angular
        .module('app')
        .config(config);
    config.$inject = ['$stateProvider', '$httpProvider', '$urlRouterProvider'];
    function config($stateProvider, $httpProvider, $urlRouterProvider) {
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

//# sourceMappingURL=app.config.js.map
