describe('boardCtrl', function() {
    var $scope;
    var $stateParams;
    var boardManager;
    var boardCtrl;
    var $window;

    beforeEach(module('taskimApp'));

    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        $stateParams = {id:10};
        $window = {innerHeight:500};
        boardManager = {
            get: function(id) {
            }
        };

        spyOn(boardManager, 'get').andReturn({then:function(){}});


        boardCtrl = $controller('boardCtrl', {$scope: $scope,
                                              $stateParams:$stateParams,
                                              $window : $window,
                                              boardManager:boardManager});
    }));

    it('should get the board id from $stateParams', function(){
        expect(boardManager.get).toHaveBeenCalledWith($stateParams.id);
    });

//    it('should set the scope max height to (window height - 100)', function(){
//        expect($scope.maxHeight).toBe($window.innerHeight - 100);
//    })
});
