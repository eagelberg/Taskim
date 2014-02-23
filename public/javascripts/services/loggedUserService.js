taskimApp.service('loggedUserService',['Restangular','$location', function(Restangular,$location){
    this.loggedUser = null;

    this.login = function(name,password,redirectUrl){
        Restangular.one('UserLogin').get({name: name,password: password}).then(function(result){
            sessionStorage.name = name;
            sessionStorage.password = password;
            this.loggedUser = result.data;
            $location.path(redirectUrl);
        });

    };

    this.isUserLogged = function(){
        if(this.loggedUser == null)
        {
            if(sessionStorage.name != null && sessionStorage.password != null){
                this.loggedUser = Restangular.one('UserLogin').get({name: sessionStorage.name,password: sessionStorage.password});
                return true;
            }
        }
        return false
    }

    this.create = function(user){
        Restangular.all('User').post(user);
    };
}]);