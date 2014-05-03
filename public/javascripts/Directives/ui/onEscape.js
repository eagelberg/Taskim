var hotKeys = {
    ENTER: 13,
    ESCAPE: 27
}

define([], function () {
    return function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if (event.which === hotKeys.ESCAPE) {
                    scope.$apply(function () {
                        scope.$eval(attrs.onEscape, {'event': event});
                    });

                    event.preventDefault();
                }
            });
        };
    }
});
