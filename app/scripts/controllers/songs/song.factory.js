'use strict'
angular.module('MusicAPp')
  .factory('Song',['$firebaseArray', '$firebaseObject', '$firebase', '$location', 'FIREBASE_URL', '$state',function ($firebaseArray, $firebaseObject, $firebase, $location, FIREBASE_URL, $state) {

  var ref = new Firebase(FIREBASE_URL);

  var songs = $firebaseArray(ref);

  var Song = {
    all: songs,
    create: function (song) {
      return songs.$add(song);
    },
    get: function (songId) {
      return songs.$getRecord(songId)
      // return $firebase(ref.child('songs').child(songId)).$asObject();
    },
    delete: function (song) {
      return songs.$remove(song);
      // special firebase splice for handling synronused arrays.
    }
  };

  return Song;

}])