define([], function () {
    return function (Restangular) {

        this.activeBoard = {};

        this.setActiveBoard = function (board) {
            this.activeBoard = board;
        };

        this.getActiveBoard = function () {
            return this.activeBoard;
        }

        this.get = function (boardId) {
            return Restangular.one('Boards', boardId).get();
        };

        this.update = function (board) {
            return board.put();
        };

        this.create = function (board) {
            return Restangular.all('Boards').post(board);
        }

        this.addUser = function (board, user) {
            board.users.push(user._id);
            return this.update(board);
        }

        this.updateActiveBoard = function () {
            return this.update(this.getActiveBoard());
        }

        this.getBoardUsers = function (boardId) {
            return Restangular.one('Boards', boardId).all('Users').getList();
        }

        this.getAllBoards = function (user) {
            return Restangular.one('User', user._id).all('Boards').getList();
        }

        this.removeUserFromBoard = function (board, user) {
            return board.one('Users', user._id).remove();
        }

        this.delete = function(board){
            return board.remove();
        }
    }
});

