/**
 * Created by Micha on 4/25/14.
 */


/**
 * TODO : figure out how to add the directives in requireJS
 * every directive should be explicitly defined in 'directives'???
 */

var hotKeys = {
    ENTER: 27,
    ESCAPE: 27
}


/**
 * TODO : is it smart to combine the onEnter and onEscape into
 * one directive? it has it's consequences
 */


/**
 * onEnter triggers a function on enter keypress

app.directive('onEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if (event.which === hotKeys.ENTER) {
                scope.$apply(function () {
                    scope.$eval(attrs.onEnter, {'event': event});
                });

                event.preventDefault();
            }
        });
    };
});

/**
 * onEscape triggers a function on escape keypress

app.directive('onEscape', function () {
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
});

/**
 * xngFocus sets the element focus according to the scope variable xngFocus

app.directive('xngFocus', function ($timeout) {
    // the focus delay is required as sort of an workaround for the angular digest loop
    var focusDelay = 50;
    return  function (scope, element, attrs) {
        scope.$watch(attrs.xngFocus,
            function (newValue) {
                $timeout(function () {
                    element.focus();
                }, focusDelay);
            }, true);
    }
});
*/
