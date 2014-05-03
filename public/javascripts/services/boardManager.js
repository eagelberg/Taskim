define([], function(){
    return function(Restangular){
        this.get = function(boardId){
            return Restangular.one('Boards', boardId).get();
        };

        this.update = function(board){
            return board.put();
        };

        this.create = function(board){
            return Restangular.all('Boards').post(board);
        }

        this.addUser = function(board,user){
            board.users.push(user._id);
            return this.update(board);
        }

        this.getBoardUsers = function(boardId){
            return Restangular.one('Boards',boardId).all('Users').getList();
        }
    }
});

