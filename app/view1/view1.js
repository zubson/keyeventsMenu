'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', function ($scope) {
        $scope.apps = [
            {name: 'App1', url: 'http://www.onet.pl', index: 0},
            {name: 'App2', url: 'http://www.wp.pl', index: 1},
            {name: 'App3', url: 'http://www.interia.pl', index: 2},
            {name: 'Bpp1', url: 'http://www.onet.pl', index: 3},
            {name: 'Bpp2', url: 'http://www.wp.pl', index: 4},
            {name: 'Bpp3', url: 'http://www.interia.pl', index: 5},
            {name: 'Cpp1', url: 'http://www.onet.pl', index: 6},
            {name: 'Cpp2', url: 'http://www.wp.pl', index: 7},
            {name: 'Cpp3', url: 'http://www.interia.pl', index: 8},
            {name: 'Cpp4', url: 'http://www.onet.pl', index: 9},
            {name: 'Cpp5', url: 'http://www.wp.pl', index: 10},
            {name: 'Cpp6', url: 'http://www.interia.pl', index: 11}
        ];

        $scope.items = $scope.apps;
    }])
    .directive('inputControl', [function () {
        return {
            restrict: 'A',
            link: function (scope, elem, attr) {
                var el = elem[0];

                $(el).keydown(function (e) {
                    if (e.keyCode == 40) {
                        $('#listRow').find('.list-items:first-of-type').addClass('item-focus');
                        $('#listRow').find('.list-items')[0].focus();
                    }
                });
            }
        }
    }])
    .directive('gridControl', [function () {
        return {
            restrict: 'A',
            link: function (scope, elem, attr) {
                var el = elem[0];

                $(el).keydown(function(e) {
                    var totalElement = $('.list-items').length,
                        indexRightPress = parseInt(attr.tabindex) + 1,
                        indexLeftPress = parseInt(attr.tabindex) - 1,
                        indexUpPress = parseInt(attr.tabindex),
                        indexDownPress = parseInt(attr.tabindex),
                        browserWidth = $(document).width();

                    if (browserWidth >= 992) {
                        indexDownPress += 3;
                        indexUpPress -= 3;
                    } else if (browserWidth >= 768) {
                        indexDownPress += 2;
                        indexUpPress -= 2;
                    } else {
                        indexDownPress += 1;
                        indexUpPress -= 1;
                    }

                    if (e.keyCode == 39) {
                        if ($(el).hasClass('last')) {
                            return false;
                        }
                        $('#listRow').find('.list-items')[indexRightPress].focus();
                    } else if (e.keyCode == 37) {
                        if ($(el).hasClass('first')) return;
                        $('#listRow').find('.list-items')[indexLeftPress].focus();
                    } else if (e.keyCode == 40) {
                        if (indexDownPress >= totalElement)  return;
                        $('#listRow').find('.list-items')[indexDownPress].focus();
                    } else if (e.keyCode == 38) {
                        if (indexUpPress < 0) {$('#search-input').focus(); return;}
                        $('#listRow').find('.list-items')[indexUpPress].focus();
                    }
                });
                // Return to input on key press different than arrows and Enter
                $(el).keydown(function(e) {
                    if (e.keyCode != 37 && e.keyCode != 38 && e.keyCode != 39 && e.keyCode != 40 && e.keyCode != 13) {
                        $('#search-input').focus();
                    }
                });
            }
        }
    }]);