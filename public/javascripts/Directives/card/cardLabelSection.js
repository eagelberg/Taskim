define([], function () {
    return function () {
        return {
            restrict: 'AE',
            templateUrl: '/assets/partials/card/cardLabelSection.html',
            scope : true,
            controller: function ($scope) {

                // initalize variables
                $scope.showLabelEditView = false;

                // label ui handling
                $scope.handleLabelEditView = function(){
                    console.log("Showing label view.. " + $scope.showLabelEditView);
                    $scope.showLabelEditView = !$scope.showLabelEditView;
                }

                // label logic handling
                $scope.getLabelTitle = function(label){
                    if(label.title && label.title.length > 0){
                        return label.title;
                    }else{
                        return label.color + ' label (default)';
                    }
                }

            }
        }
    }
});
