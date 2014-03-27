taskimApp.directive('card', function ($modal) {
    return {
        restrict: 'E',
        templateUrl: '/assets/partials/card.html',
        scope: {
            openModal: function() {
                var modal = $modal.open({
                    templateUrl: '/assets/partials/card.html',

                })
            }
        }
    };
});