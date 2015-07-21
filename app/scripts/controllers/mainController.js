'use strict';

/**
 * @ngdoc function
 * @name MusicAPp.controller:MainController
 * @description
 * # MainController
 */
angular.module('MusicAPp')
  .controller('MainController',['$scope', '$state', '$ionicSideMenuDelegate', function($scope, $state, $ionicSideMenuDelegate) {

    // do something with $scope
    // $scope.toggleLeft = function() {
    //   $ionicSideMenuDelegate.toggleLeft();
    // };
    console.log('hello');
    $scope.changeStateTest = function changeStateTestF(){
      console.log('chaning')
      $state.go('app.settings')
    }
  }]);
