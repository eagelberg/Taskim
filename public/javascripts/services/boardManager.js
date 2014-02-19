taskimApp.service('boardManager',function(Restangular, $q){
    this.get = function(boardId){
        return Restangular.one('Boards', boardId).get();
    };

    this.update = function(board){
        return board.put();
    }
});