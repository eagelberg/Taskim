taskimApp.directive('stopEvent', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            element.bind('click', function (e) {
                e.stopPropagation();
                $(element).find('.dropdown-menu').dropdown('toggle');
            });
        }
    };
});

