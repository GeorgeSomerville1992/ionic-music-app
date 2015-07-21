'use strict'
angular.module('MusicAPp')
  .controller('SongsCtrl', ['$scope', '$state', '$sce', 'Song', function ($scope, $state, $sce, Song) {
    $scope.songs = Song.all;
    console.log('4scopesongs', $scope.songs)
    $scope.trustSrc = function(src) {
      return $sce.trustAsResourceUrl(src);
    }

  }]);