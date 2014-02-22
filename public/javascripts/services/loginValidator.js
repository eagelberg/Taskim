taskimApp.run(['$rootScope',"$location",'loggedUserService', function($rootScope,$location,loggedUserService) {
    $rootScope.$on( "$stateChangeStart", function(event, next, current) {
        if (!loggedUserService.isUserLogged()) {
            if ( next.templateUrl != "assets/partials/loginPage.html"  || next.templateUrl != "assets/partials/createUser.html") {
                $location.path( "/login" );
            }
        }
    });
}]);
