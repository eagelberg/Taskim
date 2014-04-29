define([], function () {
    return function ($modal) {
        return {
            restrict: 'E',
            templateUrl: '/assets/partials/card.html',
            controller: function ($scope) {

                // TODO : should be a seperate controller here instead of inline
                // this is a very important and crucial controller

                $scope.openModal = function () {
                    var modalInstance = $modal.open({
                        templateUrl: '/assets/partials/cardModal.html',
                        resolve: {
                            card: function () {
                                return $scope.card;
                            }
                        },
                        controller: function ($scope, $modalInstance, card) {
                            $scope.card = card;

                            /* TODO (micha) : remove following code! (just for checklist and label demo) */
                            /* TODO (micha) : put all logic handling functions in an appropriate services */
                            $scope.card.checklists = [];
                            $scope.card.labels = [];

                            $scope.addChecklist = function (card, checklistTitle) {
                                card.checklists.push({
                                    title: checklistTitle,
                                    items: [],
                                    completed: 0
                                })
                            }

                            $scope.addChecklistItem = function (card, checklist, newItemName) {
                                card.checklists.forEach(function (checklist) {
                                    if (checklist.title === checklist.title) {
                                        checklist.items.push({
                                            name: newItemName,
                                            value: false
                                        })
                                    }
                                });

                                $scope.updateCompleted(checklist);
                            };

                            $scope.updateCompleted = function (checklist) {
                                // count completed value
                                var trueValues = 0;
                                var itemLen = checklist.items.length;

                                // handle empty checklist case
                                if (itemLen === 0) {
                                    checklist.completed = 0;
                                    return;

                                }
                                checklist.items.forEach(function (item) {
                                    if (item.value) {
                                        trueValues++;
                                    }
                                });

                                checklist.completed = (trueValues / itemLen) * 100.0;

                                if (checklist.completed >= 0 && checklist.completed <= 34) {
                                    checklist.progressBarType = "warning";
                                } else if (checklist.completed > 34 && checklist.completed <= 67) {
                                    checklist.progressBarType = "info";
                                } else if (checklist.completed > 67) {
                                    checklist.progressBarType = "success";
                                }
                            }

                            $scope.handleItemNameSave = function(item,newItemName){
                                // TODO : update item name in DB
                                if(newItemName.length > 0){
                                    item.name = newItemName;
                                }

                                console.log("updated item name to : " + newItemName);
                            }


                            var demoChecklist = {
                                title: 'demo1',
                                items: [
                                    {
                                        name: 'val1',
                                        value: true
                                    },
                                    {
                                        name: 'val2',
                                        value: false
                                    },
                                    {
                                        name: 'val3',
                                        value: true
                                    }
                                ],

                                completed: 0
                            };

                            $scope.updateCompleted(demoChecklist);

                            // add demo1 checklist
                            $scope.card.checklists.push(demoChecklist);


                            var demoChecklist = {
                                title: 'demo2',
                                items: [
                                    {
                                        name: 'val1',
                                        value: false
                                    },
                                    {
                                        name: 'val2',
                                        value: false
                                    },
                                    {
                                        name: 'val3',
                                        value: false
                                    }
                                ],

                                completed: 0
                            };

                            $scope.updateCompleted(demoChecklist);

                            // add demo2 checklist
                            $scope.card.checklists.push(demoChecklist);

                            // add demo label (to demo card named micha)
                            var demoLabel1 = {
                                title: 'urgent',
                                color: 'red'
                            };

                            var demoLabel2 = {
                                title: 'calm',
                                color: 'green'
                            };

                            $scope.card.labels.push(demoLabel1);
                            $scope.card.labels.push(demoLabel2);
                        },
                        windowClass: "card-modal-window"
                    });
                }
            }
        }
    }
});
