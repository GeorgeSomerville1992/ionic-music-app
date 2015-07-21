'use strict'
angular.module('MusicAPp')
  .controller('LoginController', ['$scope', '$state','FirebaseAuthenticate','$ionicLoading', '$cordovaMedia', '$ionicPlatform', function($scope, $state, FirebaseAuthenticate, $ionicLoading, $cordovaMedia, $ionicPlatform) {
    $scope.login = function(user){
      FirebaseAuthenticate.login(user);
    }



    var mediaStatusCallback = function(status){
      if(status == Media.MEDIA_STARTING){
        $ionicLoading.show({template: "loading..."});
      } else{
        $ionicLoading.hide();
      }
    }

    $ionicPlatform.ready(function(){
      console.log('im ready...')
      $scope.play = function(src){
        console.log('THE SRC', src)
        var media = new Media(src, null, null, mediaStatusCallback);
        $cordovaMedia.play(media);
      }
    })



  }]);    
