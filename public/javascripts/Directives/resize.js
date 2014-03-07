taskimApp.directive('resize', function ($window) {
    return function (scope, element) {
        var w = angular.element($window);
        scope.getWindowDimensions = function () {
            return  w.innerHeight() ;
        };

        scope.setHeight = function (newValue, oldValue) {

            scope.maxHeight = (newValue - 70);

            var e = element.get(0);

            if(e.offsetHeight < e.scrollHeight) {
                if(e.offsetHeight < newValue) {
                    scope.elementHeight = '100%';
                }

            }
        }

        scope.$watch(scope.getWindowDimensions, scope.setHeight, true);

        w.bind('resize', function () {
            scope.$apply();
        });

    }
});