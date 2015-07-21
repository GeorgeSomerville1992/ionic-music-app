'use strict';

/**
 * @ngdoc overview
 * @name MusicAPp
 * @description
 * # Initializes main application and routing
 *
 * Main module of the application.
 */


angular.module('MusicAPp', ['ionic', 'ngCordova', 'ngResource', 'firebase','spotify', 'ngSanitize'])
  .constant('FIREBASE_URL', 'https://ionic-music-app.firebaseio.com/')
  .constant('USER_ROLES', {
    admin: 'admin_role',
    public: 'public_role'
  })
  .run(function($ionicPlatform) {

    $ionicPlatform.ready(function() {
      // save to use plugins here
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });

    // add possible global event handlers here

  })

  .config(function($httpProvider, $stateProvider, $urlRouterProvider) {
    // register $http interceptors, if any. e.g.
    // $httpProvider.interceptors.push('interceptor-name');

    // Application routing
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/main.html',
        controller: 'MainController'
      })
      .state('app.home', {
        url: '/home',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/home.html',
            controller: 'HomeController'
          }
        }
      })
      .state('app.login', {
        url: '/login',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/login.html',
            controller: 'LoginController'
          }
        }
      })
      .state('app.register', {
        url:'/song',
        cache: true,
        views:{
          'viewContent': {
            templateUrl: 'templates/views/register.html',
            controller: 'RegisterCtrl'
          }
        }
      })
      .state('app.profile', {
        url: '/profile',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/profile.html',
            controller: 'ProfileController'
          }
        }
      })

      .state('app.songCreate', {
        url: '/songs/create',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/songs/create.html',
            controller: 'SongCreateCtrlh'
          }
        }
      })
      .state('app.songs', {
        url: '/songs' ,
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/songs/home.html',
            controller: 'SongsCtrl'
          }
        }
      })
      .state('app.songShow', {
        url: '/songs/:songId' ,
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/songs/show.html',
            controller: 'SongCtrl'
          }
        }
      })



      .state('app.settings', {
        url: '/settings',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/settings.html',
            controller: 'SettingsController'
          }
        }
      });


    // redirects to default route for undefined routes
    $urlRouterProvider.otherwise('/app/home');
  })
  .config(function (SpotifyProvider) {
    SpotifyProvider.setClientId('7171a374df1c4ed18b672cc3bfb8bcfb');
    SpotifyProvider.setRedirectUri('http://localhost:8888/callback');
    SpotifyProvider.setScope('user-read-private playlist-read-private playlist-modify-private playlist-modify-public');
    // If you already have an auth token
    SpotifyProvider.setAuthToken('<AUTH_TOKEN>');
  });


