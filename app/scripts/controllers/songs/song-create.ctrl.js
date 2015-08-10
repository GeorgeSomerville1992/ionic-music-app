'use strict'
angular.module('MusicAPp')
  .controller('SongCreateCtrl',['$scope', '$ionicLoading', '$cordovaMedia', '$state', '$sce', '$ionicSideMenuDelegate', '$ionicPlatform', 'Spotify', 'Song', 'user', function($scope, $ionicLoading, $cordovaMedia, $state, $sce, $ionicSideMenuDelegate, $ionicPlatform, Spotify, Song, user) {
    $scope.getSongs = function(song){
      console.log('song', song)
      Spotify.search(song.name, 'track').then(function(data){
        console.log(data)
        $scope.songResults = data.tracks;
      })
    }
    $scope.trustSrc = function(src) {
      return $sce.trustAsResourceUrl(src);
    }

    $scope.saveSong = function(src){


    }
    $scope.songs = Song.all;



    $scope.submitSong = function (song) {
      console.log(song)
      $scope.song = {url: 'http://', 'title': ''};
      song.createdBy = user.password.email
      Song.create(song).then(function () {
        $scope.songResults = ''
        // $scope.post = {url: 'http://', 'title': ''};
      });
    };

    $scope.deletePost = function (post) {
      Song.delete(song);
    };


    // $ionicPlatform.ready(function(){
    //   console.log('im ready...')

    //   var mediaStatusCallback = function(status){
    //     console.log('firing medastatus call back...', status)
    //     if(status == Media.MEDIA_STARTING){
    //       $ionicLoading.show({template: "loading..."});
    //     } else{
    //       $ionicLoading.hide();
    //     }
    //   }


    //   $scope.play = function(src){
    //     console.log('THE SRC', src)
    //     var media = new Media(src, null, null, [mediaStatusCallback]);
    //     $cordovaMedia.play(media);
    //   }
    // })

    // document.addEventListener("deviceready", onDeviceReady, false);

    // // device APIs are available
    // //
    // // some found away to upload and include the file name into a hash
    // // then search for that file name, which will be saved using the hash.
    // function playAudio(src) {
    //     // Create Media object from src
    //   console.log('thesrc', src)
    //   my_media = new Media(src, onSuccess, onError);

    //   // Play audio
    //   my_media.play();

    //   // Update my_media position every second
    //   if (mediaTimer == null) {
    //     mediaTimer = setInterval(function() {
    //           // get my_media position
    //       my_media.getCurrentPosition(
    //           // success callback
    //         function(position) {
    //             if (position > -1) {
    //                 setAudioPosition((position) + " sec");
    //             }
    //         },
    //           // error callback
    //         function(e) {
    //             console.log("Error getting pos=" + e);
    //             setAudioPosition("Error: " + e);
    //         }
    //       );
    //     }, 1000);
    //   }
    // }
    // function onDeviceReady() {
    //     playAudio("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3");
    // }
    // $scope.playMedia = function(src){
    //   console.log('runnign plya media!@!')
    //   playAudio(src)
    // }
    // // Audio player
    // //
    // var my_media = null;
    // var mediaTimer = null;

    // // Play audio
    // //


    // // Pause audio
    // //
    // function pauseAudio() {
    //     if (my_media) {
    //         my_media.pause();
    //     }
    // }

    // // Stop audio
    // //
    // function stopAudio() {
    //     if (my_media) {
    //         my_media.stop();
    //     }
    //     clearInterval(mediaTimer);
    //     mediaTimer = null;
    // }

    // // onSuccess Callback
    // //
    // function onSuccess() {
    //     console.log("playAudio():Audio Success");
    // }

    // // onError Callback
    // //
    // function onError(error) {
    //     alert('code: '    + error.code    + '\n' +
    //           'message: ' + error.message + '\n');
    // }

    // // Set audio position
    // //
    // function setAudioPosition(position) {
    //     document.getElementById('audio_position').innerHTML = position;
    // }







  }])