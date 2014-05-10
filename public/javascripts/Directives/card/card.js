define([], function () {
    return function ($modal) {
        return {
            restrict: 'E',
            templateUrl: '/assets/partials/card/card.html',

            controller: function ($scope) {

                // TODO : should be a seperate controller here instead of inline
                // this is a very important and crucial controller

                $scope.showCardActions = false;

                $scope.handleMouseOver = function () {
                    $scope.showCardActions = true;
                }

                $scope.handleMouseLeave = function () {
                    $scope.showCardActions = false;
                }

                $scope.openModal = function () {
                    var modalInstance = $modal.open({
                        templateUrl: '/assets/partials/card/cardModal.html',
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

                            var guy = {
                                name: 'Guy Eagelberg',
                                initials: 'GE'
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

                            var taskimChecklist = {
                                title: 'build taskim',
                                items: [
                                    {
                                        name: 'quit job',
                                        value: true
                                    },
                                    {
                                        name: 'open office in Tel Aviv',
                                        value: true
                                    },
                                    {
                                        name: 'profit',
                                        value: false
                                    }
                                ],

                                completed: 0
                            };

                            $scope.updateCompleted(taskimChecklist);

                            // add taskimChecklist
                            $scope.card.checklists.push(taskimChecklist);


                            var richChecklist = {
                                title: 'become rich',
                                items: [
                                    {
                                        name: 'rob a bank',
                                        value: false
                                    }

                                ],

                                completed: 0
                            };

                            var randomDate = function (start, end) {
                                return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
                            }

                            var addActivity = function (card, activityInfo, initiator, type) {

                                var randDate = randomDate(new Date(2012, 0, 1), new Date());

                                card.activities.push({
                                    date: randDate.getTime(),
                                    initiator: initiator,
                                    info: activityInfo,
                                    type: type
                                });
                            }




                            $scope.updateActivityInfo = function (card) {

                            }

                            $scope.updateCardDescription = function (card) {
                                console.log("updating card description with " + card.description);
                            }

                            $scope.updateCompleted(richChecklist);

                            // add richChecklist
                            $scope.card.checklists.push(richChecklist);

                            // add demo label (to demo card named micha)
                            var demoLabel1 = {
                                title: 'urgent',
                                color: 'red'
                            };

                            var demoLabel2 = {
                                title: '',
                                color: 'green'
                            };

                            $scope.card.labels.push(demoLabel1);
                            $scope.card.labels.push(demoLabel2);

                            // add demo activities
                            addActivity(card, ['moved stuff to other stuff'], itay, 'activity');
                            addActivity(card, ['I am itay!'], itay, 'comment');
                            addActivity(card, ['completed classified mission', 'bragged about it'], micha, 'activity');

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
