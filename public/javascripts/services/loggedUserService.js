taskimApp.service('loggedUserService',['Restangular', function(Restangular){
    this.loggedUser = null;

    this.login = function(name,password){
        this.loggedUser = Restangular.one('UserLogin').get({name: name,password: password});
    }

    this.create = function(user){
        Restangular.all('User').post(user);
    }
}]);