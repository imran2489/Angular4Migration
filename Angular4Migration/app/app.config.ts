'use strict';

angular.
  module('phonecatApp').
  config(['$locationProvider' ,'$routeProvider',
      function config($locationProvider: any, $routeProvider: any) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        otherwise('/phones');
    }
  ]);
