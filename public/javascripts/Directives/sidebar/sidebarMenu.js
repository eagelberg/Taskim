define([], function () {
    return function () {
        return {
            restrict: 'AE',
            templateUrl: '/assets/partials/sidebar/sidebarMenu.html',
            controller: function ($scope,boardManager,$state) {

                $scope.showMenuOptions = false;

                // handle sidebar options
                $scope.handleCardFilterOption = function(){
                    console.log("handleCardFilterOption");
                }

                $scope.handleSettingsOption = function(){
                    console.log("handleSettingsOption");
                }

                $scope.handleSubscribeOption = function(){
                    console.log("handleSubscribeOption");
                }

                $scope.handleShareOption = function(){
                    console.log("handleShareOption");
                }

                $scope.handleLeaveBoardOption = function(){
                    console.log("handleLeaveBoardOption");
                    boardManager.removeUserFromBoard($scope.activeBoard, $scope.activeUser).then(function () {
                        $state.go('userPage');
                    });
                }

                $scope.handleCloseBoardOption = function(){
                    console.log("handleCloseBoardOption");
                    boardManager.delete($scope.activeBoard).then(function () {
                        $state.go('userPage');
                    });
                }

                // handle scope ui logic
                $scope.toggleMenuOptions = function(){
                    $scope.showMenuOptions = !$scope.showMenuOptions;
                }
            }
        }
    }
});
