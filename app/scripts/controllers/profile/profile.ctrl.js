'use strict'
angular.module('MusicAPp')
  .controller('ProfileController', ['$scope', '$state','FirebaseAuthenticate', 'user', function($scope, $state, FirebaseAuthenticate, user) {
    console.log('this is my profile controller')
    function getProfile(){

    };
    $scope.updateProfile = function updateProfile(profile){
      // profile .update
      console.log(user)
      console.log(profile)
      FirebaseAuthenticate.updateProfile(user.password.email, profile);
    };

    
  }]); 