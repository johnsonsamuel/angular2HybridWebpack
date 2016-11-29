export default  [ '$scope','$http','$q','ListingService',
        function( $scope, $http, $q, ListingService ){
  $scope.title = "Angular 1&2";
  $scope.listing = {};
  $scope.listing.weather = {};
  $scope.listing.selectedState = 'CA';
    var typeMapping = {
        FL: 'Florida',
        NJ: 'New Jersey',
        NY: 'New York',
        CA: 'California'
    };
$scope.displaySearchText = function ( param ){
    return typeMapping[ param ];
};

  $scope.listing.fetchWeatherByState = ( state ) => {
      ListingService.fetchAll( state ).then(  function( response ){
          $scope.listing.weather = response.response.results;
      }, function( err ){
          console.log( err );
      });
  };

  $scope.listing.fetchWeatherByState( $scope.listing.selectedState );

}];
