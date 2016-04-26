/// <reference path='../typings/main.d.ts' />

;((): void => {
  'use strict';

  angular
    .module('app', [
      'ui.router',
      'app.templates',
      'common',
      'user'
    ]);
})();
