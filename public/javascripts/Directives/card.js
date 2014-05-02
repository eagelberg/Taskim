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
                            },

                            board: function () {
                                return $scope.board;
                            }
                        },
                        controller: function ($scope, $modalInstance, card, board) {
                            $scope.card = card;

                            /* TODO (micha) : remove following code! (just for checklist, label and activity demo) */
                            /* TODO (micha) : put all logic handling functions in an appropriate services */
                            $scope.card.checklists = [];
                            $scope.card.labels = [];
                            $scope.card.activities = [];


                            var micha = {
                                name: 'Micha Sherman',
                                initials: 'MS'
                            }

                            var itay = {
                                name: 'Itay Maoz',
                                initials: 'IM'
                            }

                            // set active user
                            // TODO : this varibale should be visible by all (rootScope?)
                            $scope.activeUser = micha;


                            $scope.addChecklist = function (card, checklistTitle) {
                                card.checklists.push({
                                    title: checklistTitle,
                                    items: [],
                                    completed: 0
                                })
                            }

                            $scope.addChecklistItem = function (card, checklist, newItemName) {
                                card.checklists.forEach(function (scannedChecklist) {
                                    if (scannedChecklist.title === checklist.title) {
                                        checklist.items.push({
                                            name: newItemName,
                                            value: false
                                        })
                                    }
                                });

                                //$scope.updateCompleted(checklist);
                            };

                            // TODO : move this function to the progress bar directive controller
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

                            $scope.handleItemNameSave = function (item) {
                                // TODO : update item name in DB

                                console.log("updated item name to : " + item.name);

                                // $scope.updateBoard();
                            }

                            $scope.handleItemValueSave = function (item) {
                                console.log("updated item name " + (item.name) + " to  " + item.value);

                                //$scope.updateBoard();


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

                            var randomDate = function (start, end) {
                                return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
                            }

                            $scope.addActivity = function (card, activityInfo, initiator, type) {

                                var randDate = randomDate(new Date(2012, 0, 1), new Date());

                                card.activities.push({
                                    date: randDate.getTime(),
                                    initiator: initiator,
                                    info: activityInfo,
                                    type: type
                                });
                            }

                            $scope.addActivityComment = function (card, comment) {
                                var now = new Date();
                                card.activities.push({
                                    date: now.getTime(),
                                    initiator: $scope.activeUser,
                                    info: [comment],
                                    type: 'comment'
                                });

                                console.log("added comment : " + comment);
                            }

                            $scope.updateActivityInfo = function (card) {

                            }

                            $scope.updateCardDescription = function (card) {
                                console.log("updating card description with " + card.description);
                            }

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

                            // add demo activities
                            $scope.addActivity(card, ['moved stuff to other stuff'], itay, 'activity');
                            $scope.addActivity(card, ['I am itay!'], itay, 'comment');
                            $scope.addActivity(card, ['completed multiple 1', 'completed multiple 2'], micha, 'activity');

                            console.log("board=");
                            console.log(board);
                        },
                        windowClass: "card-modal-window"
                    });
                }
            }
        }
    }
});
