export default [ '$scope','$location', function( $scope, $location ){
    $scope.title = "Angular 1&2 -  Nav";
    $scope.getClass =  ( path ) => {
        return ( $location.path().substr(0, path.length) === path ) ? 'active' : '';
    }
}];



