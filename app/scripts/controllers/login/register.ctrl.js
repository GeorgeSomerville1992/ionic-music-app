'use strict';
 
angular.module('MusicAPp')
  .controller('RegisterCtrl', ['$scope', '$state', '$ionicPopup', '$firebaseAuth', 'FirebaseAuthenticate',  function($scope, $state, $ionicPopup, $firebaseAuth, FirebaseAuthenticate) {
    $scope.user = {
      email:'' ,
      password: ''
    }
    $scope.register = function(){
      console.log($scope.user)
      FirebaseAuthenticate.register($scope.user)
    }
    $scope.login = function(){
      FirebaseAuthenticate.login($scope.user)
    }

  }])