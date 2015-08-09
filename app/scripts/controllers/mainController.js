'use strict';

/**
 * @ngdoc function
 * @name MusicAPp.controller:MainController
 * @description
 * # MainController
 */
angular.module('MusicAPp')
  .controller('MainController',['$scope', '$state', '$ionicSideMenuDelegate', 'FirebaseAuthenticate', function($scope, $state, $ionicSideMenuDelegate, FirebaseAuthenticate) {

    // do something with $scope
    // $scope.toggleLeft = function() {
    //   $ionicSideMenuDelegate.toggleLeft();
    // };
    // thisis the main wrapper which I think is the controller which goes over everything. 
    console.log('hello');
    $scope.changeStateTest = function changeStateTestF(){
      console.log('chaning')
    }
    $scope.logout = function logout(){
      FirebaseAuthenticate.logout();
    }
  }]);
