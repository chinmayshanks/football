/*
    Author     : Chinmay Shaligram
*/
var config = {headers:  {
        'X-Auth-Token': 'ENTER-TOKEN-HERE'
    }
};



app.factory('football', ['$http', function($http) { 
    return $http.get('http://api.football-data.org/v1/soccerseasons/398/leagueTable', config) 
        .success(function(data) { 
        
        return data;
    }) 
        .error(function(err) { 
        return err; 
    }); 
}]);

app.factory('team', function($http, $q){
    return function () {
        var d = $q.defer();
        $http.get(teamUrl, config)
            .success(function(data) {
                d.resolve(data);
            })
            .error(function(data){
                console.log('error: ' + data);
                d.reject(data);
            });
        return d.promise;
    };
});