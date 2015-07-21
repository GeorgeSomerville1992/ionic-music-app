'use strict';
 
angular.module('IonicGulp')
  .controller('RegisterCtrl', ['$scope', '$state', '$ionicPopup', 'AuthService', '$firebaseAuth', 'FirebaseAuthenticate',  function($scope, $state, $ionicPopup, AuthService, $firebaseAuth, FirebaseAuthenticate) {
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