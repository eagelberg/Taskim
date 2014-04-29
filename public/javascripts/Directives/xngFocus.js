define([], function () {
    return function ($timeout) {
        return function (scope, element, attrs) {
              scope.$watch(attrs.xngFocus,
                function (newValue) {
                    $timeout(function () {
                        element.focus();
                    }, 50);
                }, true);
        };
    }
});
