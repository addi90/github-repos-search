/// <reference path="../../typings/main.d.ts" />

'use strict';

describe('user module', () => {

  beforeEach(angular.mock.module('user'));

  describe('user controller', () => {

    it('should be defined and truthy', angular.mock.inject(($controller, $injector) => {
      var userService = $injector.get('UserService');
      var userCtrl = $controller('UserController', {
        UserService: userService
      });

      expect(userCtrl).toBeDefined();
      expect(userCtrl).toBeTruthy();
    }));


    it('should call search method', angular.mock.inject(($controller, $injector) => {
      var userService = $injector.get('UserService');
      var userCtrl = $controller('UserController', {
        UserService: userService
      });
      userCtrl.search('addi90');
      expect(userCtrl.repoList).not.toEqual([]);
    }))

  });

  describe('user service', () => {
    it('should be defined and truthy', angular.mock.inject(($http, $injector) => {
      var userService = $injector.get('UserService');
      expect(userService).toBeDefined();
      expect(userService).toBeTruthy();
    }));

    it('should fetch user repo data', angular.mock.inject(($http, $httpBackend, $injector) => {
      var userService = $injector.get('UserService');
      var res = {};

      userService.getUserRepos('addi90')
        .then((response) => {
          res = response;
        });


      $httpBackend
        .when('GET', 'https://api.github.com/users/addi90/repos')
        .respond(200, [{
          "id": 43835177,
          "name": "adicoin",
          "html_url": "https://github.com/addi90/adicoin",
          "description": "An alternate version of bitcoin"
        }]);

      $httpBackend.flush();

      expect(res).toBeDefined();
      expect(res).toBeTruthy();
    }));
  })
});