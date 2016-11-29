export default [ '$http','$q',
    function( $http, $q ){
        var listingModel = {};

        listingModel.fetchAll = function( state ){
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'http://api.wunderground.com/api/c62c4b464419b5b2/forecast/geolookup/conditions/q/'+state+'.json',
                data: {}
            }).success( function( data ) {
                deferred.resolve(data);
            }).error( function( err ){
                deferred.reject(err);
            });

            return deferred.promise;
        };


        listingModel.fetchMySpotifyPlayList = function( searchValue ){
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'https://api.spotify.com/v1/search?q='+searchValue+'&type=album',
                data: {}
            }).success( function( data ) {
                deferred.resolve(data);
            }).error( function( err ){
                deferred.reject(err);
            });

            return deferred.promise;
        };

        return listingModel;

    }];
