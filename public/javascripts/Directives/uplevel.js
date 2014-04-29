define(['jquery'], function ($) {
    return function ($window) {
        return function (scope, element) {
            $(element).on('shown.bs.dropdown', function (event) {
                var glyphicon = $(this).find('.glyphicon ');
                var dropDown = $(this).find('.dropdown-menu');
                var pos = dropDown.offset();
                dropDown.css({ position: "fixed",
                    marginLeft: 0,
                    marginTop: 0,
                    top: pos.top, left: pos.left });
            });
        }
    }
});
