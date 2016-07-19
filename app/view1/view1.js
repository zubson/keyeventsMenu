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
            {name: 'App1', url: '', index: 0},
            {name: 'App2', url: '', index: 1},
            {name: 'App3', url: '', index: 2},
            {name: 'Bpp1', url: '', index: 3},
            {name: 'Bpp2', url: '', index: 4},
            {name: 'Bpp3', url: '', index: 5}
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
                        console.log('down arrow');
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

                // if ($(el).hasClass('item-focus')) {
                //     console.log('has class');
                // }                ;

                var indexUp = parseInt(attr.tabindex) + 1;
                var indexDown = parseInt(attr.tabindex) - 1;

                $(el).keydown(function(e) {
                    if (e.keyCode == 39) {
                        console.log('key right');
                        $('#listRow').find('.list-items')[indexUp].focus();
                    } else if (e.keyCode == 37) {
                        console.log('key right');
                        $('#listRow').find('.list-items')[indexDown].focus();
                    } else if (e.keyCode == 90) {
                        $('#search-input').focus();
                    }
                });
            }
        }
    }]);