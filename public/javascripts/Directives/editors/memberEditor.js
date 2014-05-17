define([], function () {
        return function () {
            return {
                restrict: 'AE',
                templateUrl: '/assets/partials/editors/memberEditor.html',
                scope: {
                    card: '=?', // optional binding
                    members: '='
                },
                link: function (scope) {
                    scope.memberInputFocused = true;
                    scope.memberAddMode = false;
                    scope.memberRemoveMode = false;
                },
                controller: function ($scope, boardManager) {

                    // handle scope logic functions
                    $scope.handleMemberAddition = function (memberToAdd) {
                        console.log("trying to add member : ");
                        console.log(memberToAdd);

                        if (typeof $scope.card === 'undefined') {
                            return;
                        }

                        if (typeof $scope.card.members === 'undefined') {
                            return;
                        }

                        // check if member to add is a already a card member
                        if (findMemberIn($scope.card.members, memberToAdd) === true) {
                            // give option to remove member from card members
                            switchToRemoveMode();
                        } else {
                            // give option to add member to card members
                            switchToAddMode();
                        }
                    }

                    var findMemberIn = function (members, memberToFind) {
                        var found = false;
                        members.forEach(function (member) {
                            if (member.name.indexOf(memberToFind.name) > -1) {
                                found = true;
                                return;
                            }
                        });

                        return found;
                    }

                    var getMemberIndex = function (members, memberToFind) {
                        var index = 0, memberIndex = 0;
                        members.forEach(function (member) {
                            if (member.name.indexOf(memberToFind.name) > -1) {
                                memberIndex = index;
                                return;
                            }

                            index++;
                        });
                         return memberIndex;
                    }

                    $scope.addAsCardMember = function (memberToAdd) {
                        $scope.card.members.push(memberToAdd);
//                        updateBoard();
                        addMemberEditActivity('added ' + memberToAdd.name + ' to ' + $scope.card.title);
                        boardManager.updateActiveBoard();
                        switchToRemoveMode();
                    }

                    $scope.removeFromCardMembers = function (memberToAdd) {
                        $scope.card.members.splice(getMemberIndex($scope.card.members, memberToAdd), 1);
//                        updateBoard();
                        addMemberEditActivity('removed ' + memberToAdd.name + ' from ' + $scope.card.title);

                        boardManager.updateActiveBoard();
                        switchToAddMode();
                    }

                    var addMemberEditActivity = function(acitivtyInfo){
                        var memberEditActivity = {
                            date: new Date().getTime(),
                            initiator: $scope.card.members[0],
                            type: 'activity',
                            info: [acitivtyInfo],
                            readOnly: false
                        };

                        $scope.card.activities.push(memberEditActivity);
                    }

                    var updateBoard = function () {
                        boardManager.update($scope.activeBoard).then(function (updatedBoard) {
//                            boardManager.setActiveBoard(updatedBoard);
                        });
                    };

                    // scope ui logic
                    var switchToAddMode = function () {
                        $scope.memberAddMode = true;
                        $scope.memberRemoveMode = false;
                    }

                    var switchToRemoveMode = function () {
                        $scope.memberAddMode = false;
                        $scope.memberRemoveMode = true;
                    }

                    var switchOffEditMode = function () {
                        $scope.memberAddMode = false;
                        $scope.memberRemoveMode = false;
                    }

                    $scope.$watch('memberToAdd', function (memberToAddName) {
                        if (memberToAddName && memberToAddName.length > 0) {
                            // check if member input is an actual member name
                            $scope.members.forEach(function (member) {
                                if (memberToAddName.indexOf(member.name) != -1) {
                                    return;
                                }
                            });

                            // unless member input is an actual member, switch off edit mode (add or remove button)
                            switchOffEditMode();
                        }
                    });

                }
            }
        }
    }
)
;
