;((): void => {
  'use strict';

  angular
    .module('common')
    .service('HttpInterceptorService', HttpInterceptorService);

  //TODO: Replace this with ng-annotate gulp task, here and in all the files
  HttpInterceptorService.$inject = ['$location', '$q'];

  function HttpInterceptorService (
    $location: ng.ILocationService,
    $q: ng.IQService
  ): ng.IHttpInterceptor {

    return {
      request,
      responseError
    };

    function request (config: ng.IRequestConfig): ng.IRequestConfig {
      // Transform the config header and return
      return angular.merge({}, config, {
        headers: {
          Accept: 'application/vnd.github.v3+json'
        }
      });
    }

    function responseError (response) {
      if (response.status === 401) {
        $location.path(`/`);
      }

      return $q.reject(response);
    }
  }
})();
