;((): void => {
  'use strict';

  angular
    .module('common')
    .directive('starred', StarredDirective);

  function StarredDirective () {
    return {
      restrict: 'E',
      scope: {
        isStarred: '='
      },
      templateUrl: 'common/common.starred.html',
      link: (scope) => {
        scope.toggle = () => {
          scope.isStarred = !scope.isStarred;
        }
      }
    }
  }
})();
