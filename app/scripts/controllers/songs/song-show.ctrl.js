'use strict'
angular.module('MusicAPp')
  .controller('SongCtrl', ['$scope', '$stateParams', '$state', '$sce', 'Song', function ($scope, $stateParams, $state, $sce, Song) {
    console.log('stateparams', $stateParams.songId)
    $scope.song = Song.get($stateParams.songId);
    console.log('apsdfjpaijfklasjdfklasjdflkasjdflkasjdfklasjflkasdjlksfjklsa')
    $scope.trustSrc = function(src) {
      return $sce.trustAsResourceUrl(src);
    }
    console.log($scope.song)
  }]);