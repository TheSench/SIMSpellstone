(function (angular) {
    'use strict';

    var storageAPI = require('storageAPI');

    var DeckStorageCtrl = function ($scope) {
        $scope.getSavedDecks = storageAPI.getSavedDecks;

        $scope.keys = function (obj) {
            return (obj ? Object.keys(obj) : []);
        };
    };
    var module;
    try {
        module = angular.module('simulatorApp');
    }
    catch (loadError) {
        module = angular.module('simulatorApp', []);
    }

    module.controller('DeckStorageCtrl', ['$scope', DeckStorageCtrl]);

}(angular));