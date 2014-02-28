taskimApp.directive('resize', function ($window) {
    return function (scope, element) {
        var w = angular.element($window);
        scope.getWindowDimensions = function () {
            return { 'h': w.innerHeight };
        };

        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
            scope.windowHeight = newValue.h + 'px';
            scope.maxHeight = (newValue.h - 60);

        }, true);

        w.bind('resize', function () {
            scope.$apply();
        });
    }
});