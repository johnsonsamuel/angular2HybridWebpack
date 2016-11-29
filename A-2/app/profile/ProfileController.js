export default [ '$scope','ListingService',  function( $scope, ListingService ){
    $scope.title = "Spotify playlist listing";
    $scope.playlist = {};
    $scope.playlist.searchValue = 'Hello';

    $scope.getSpotifyList = () => {
        ListingService.fetchMySpotifyPlayList( $scope.playlist.searchValue ).then(  function( response ){
            $scope.playlist.myPlayList = response.albums;
        }, function( err ){
            console.log( err );
        });
    };

    $scope.getSpotifyList();
}];
