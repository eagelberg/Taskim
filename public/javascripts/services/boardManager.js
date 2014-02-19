taskimApp.service('boardManager',function($http, $q){
    this.get = function(boardId){
        var deferred= $q.defer();
        $http.get('/Boards/'.concat(boardId)).success(function (data) {
            deferred.resolve(data);
        });

        return deferred.promise;
    };

    this.update = function(board){
        var deferred = $q.defer();
        $http.put('Boards/'.concat(board._id), board).success(function(data) {
            deferred.resolve(data);
        });

        return deferred.resolve(data);
    }
});