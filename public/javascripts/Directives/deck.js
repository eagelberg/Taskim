taskimApp.directive('deck', function ($window) {
    return {
        restrict: 'E',
        templateUrl: '/assets/partials/deck.html',
        link: function (scope, element) {
            var w = angular.element($window);
            scope.getWindowDimensions = function () {
                return  w.innerHeight() ;
            };

            scope.sortableOptions = {
                update:function (event, ui) {
                    $scope.updateBoard();
                },
                connectWith: '.sort',
                helper: 'clone',
                appendTo: 'body'
            }

            scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {

                scope.maxHeight = (newValue - 70);
                var e = element.get(0);

                if((e.offsetHeight < e.scrollHeight) && (e.offsetHeight < newValue)) {
                    scope.elementHeight = '100%';
                }
            }, true);

            w.bind('resize', function () {
                scope.$apply();
            });
        }
    };
});