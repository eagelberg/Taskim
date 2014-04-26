define([],function(){
    return ['Restangular',function(Restangular){
        this.getAllByFilter = function(filter){
            return Restangular.all('User').getList({name: filter})
        };

        this.addBoard = function(user,board){
            user.boards.push(board._id);
            return this.update(user);
        }

        this.update = function(user){
            return Restangular.one('User',user._id).customPUT({_id: user._id,name: user.name,password:user.password,boards:user.boards});
        }

        this.get = function(userId){
            return Restangular.one('User',userId).get();
        }

        this.create = function(user){
            Restangular.all('User').post(user);
        };
    }]
});