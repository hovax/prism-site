'use strict';

/**
 * @ngdoc overview
 * @name prismSiteApp
 * @description
 * # prismSiteApp
 *
 * Main module of the application.
 */
angular
  .module('prismSiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/CV', {
        templateUrl: 'views/cv.html',
        controller: 'cvCtrl'
      })
      .when('/work', {
        templateUrl: 'views/work.html',
        controller: 'workCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
