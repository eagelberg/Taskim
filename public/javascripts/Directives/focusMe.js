define([], function () {
    return function ($timeout, $parse) {
        return function (scope, element, attrs) {
            var model = $parse(attrs.focusMe);
            scope.$watch(model, function (value) {
                if (value === true) {

                    // the timeout is needed to give the view time to render
                    $timeout(function () {
                        element[0].focus();
                    });
                }
            });

            element.bind('blur', function () {
                scope.$apply(model.assign(scope, false));
            });
        }
    }
});
