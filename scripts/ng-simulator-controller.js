(function (angular, LOCATIONS, CAMPAIGNS, MISSIONS, RAIDS, BATTLEGROUNDS, MAP_BATTLEGROUNDS) {
    'use strict';

    var filterByParent = function (unfiltered, parentID, parentIDField) {
        return unfiltered.filter(function (entry) {
            return entry[parentIDField] == parentID;
        });
    };

    var filterChildren = function (unfiltered, parentID, parents, childrenField, childIDField) {
        var parent = parents.filter(function (parent) { return parent.id == parentID; })[0];
        if (parent) {
            var children = parent[childrenField];
            var filtered = unfiltered.filter(function (child) {
                var childID = child[childIDField];
                var isChildOfParent = children.indexOf(childID) >= 0;
                return isChildOfParent;
            });
            return filtered;
        } else {
            return [];
        }
    };

    angular.module('core', [])
        .filter('forMissions', function () {
            return function (campaigns, missions) {
                if (!campaigns || !missions) return campaigns;

                var newCampaigns = [];
                for (var i = 0, len = campaigns.length; i < len; i++) {
                    var campaign = campaigns[i];
                    var missionsInCampaign = campaign.missions;
                    var inCampaign = true;

                    for (var j = 0; j < missionsInCampaign.length; j++) {
                        var mission = missionsInCampaign[j];
                        if (!missions[mission]) {
                            inCampaign = false;
                            break;
                        }
                    }
                    if (inCampaign) {
                        newCampaigns.push(campaign);
                    }
                }
                return newCampaigns;
            };
        })
        .filter('filterByParent', function () {
            return filterByParent;
        })
        .filter('filterChildren', function () {
            return filterChildren;
        });

    angular.module('simulatorApp', ['core'])
        .controller('SimulatorCtrl', ['$scope', SimulatorCtrl]);

    function SimulatorCtrl($scope) {
        initialize();

        function initialize() {
            $scope.locations = ToArray(LOCATIONS).sort(function (locationA, locationB) {
                return Number(locationA.id) - Number(locationB.id);
            });
            $scope.campaigns = ToArray(CAMPAIGNS);
            $scope.missions = ToArray(MISSIONS);

            $scope.raids = RAIDS;

            $scope.battlegrounds = BATTLEGROUNDS;
            $scope.mapBattlegrounds = toArray(MAP_BATTLEGROUNDS);

            $scope.campaignBGEs = [];

            $scope.tower = false;
            $scope.towerTypes = ["Castle Tower", "Cannon Tower", "Tree of Life"];
            $scope.auto = false;

            $scope.debugMode = false;

            $scope.selections = {
                location: '',
                campaign: '',
                mission: '',
                raid: ''
            };

            $scope.filteredRaids = getFilteredRaids;
            $scope.getLocationClass = getLocationClass;
            $scope.getCampaignClass = getCampaignClass;
            $scope.selectableBattlegrounds = getSelectableBattlegrounds;
            $scope.personalBattlegrounds = getPersonalBattlegrounds;
            $scope.towerTypes = getTowerTypes;

            $scope.$watch("selections.location", resetCampaign);

            $scope.$watch("selections.campaign", resetMission);
        }

        function resetCampaign() {
            $scope.selections.campaign = '';
        }

        function resetMission() {
            $scope.selections.mission = '';
        }

        function ToArray(table) {
            var IDs = Object.keys(table);
            IDs.sort(function (a, b) {
                return Number(a) - Number(b);
            });
            var list = [];
            for (var i = 0; i < IDs.length; i++) {
                var key = IDs[i];
                var entry = table[key];
                list.push(entry);
            }
            return list;
        }

        function toArray(object) {
            var ary = [];
            for (var key in object) {
                ary.push(object[key]);
            }
            return ary;
        }

        function getSelectableBattlegrounds() {
            var selectable = [];
            for (var id in $scope.battlegrounds) {
                var BGE = $scope.battlegrounds[id];
                if (!(BGE.hidden || BGE.isTower)) selectable.push(BGE);
            }
            selectable.sort(function (a, b) { return a.id - b.id; });
            return selectable;
        }

        function getPersonalBattlegrounds() {
            var selectable = [];
            for (var id in $scope.battlegrounds) {
                var BGE = $scope.battlegrounds[id];
                var bgeID = Number(BGE.id);
                if (bgeID > 1000 && bgeID < 2000) selectable.push(BGE);
            }
            selectable.sort(function (a, b) { return a.id - b.id; });
            return selectable;
        }

        function getFilteredRaids() {
            var filtered = {};

            toArray($scope.raids)
                .sort(function (raidA, raidB) {
                    return Number(raidB.id) - Number(raidA.id);
                })
                .forEach(function (raid) {
                    if (!filtered[raid.name]) {
                        filtered[raid.name] = raid;
                    }
                });

            return toArray(filtered)
                .sort(function (raidA, raidB) {
                    return Number(raidA.id) - Number(raidB.id);
                });
        }

        function getLocationClass(location) {
            if (!location) {
                var selected = $scope.selections.location;
                location = $scope.locations.filter(function (location) {
                    return location.id === selected;
                })[0];
            }
            if (!location) {
                return "grey";
            } else {
                var id = Number(location.id);
                if (id === 0) {
                    return "heroUpgrade";
                } else if (id >= 100) {
                    return "event";
                } else {
                    return "black";
                }
            }
        }

        function getCampaignClass(campaign) {
            if (!campaign) {
                var selected = $scope.selections.campaign;
                campaign = $scope.campaigns.filter(function (campaign) {
                    return campaign.id == selected;
                })[0];
            }
            if (!campaign) {
                return "grey";
            } else if (campaign.side_mission) {
                return (campaign.location_id == 0 ? "heroUpgrade" : "mythic");
            } else if (campaign.isLocation) {
                return "location";
            } else {
                return "black";
            }
        }

        function getTowerTypes() {
            var towerTypes = [];
            for (var id in $scope.battlegrounds) {
                var BGE = $scope.battlegrounds[id];
                if (BGE.isTower) towerTypes.push(BGE);
            }
            towerTypes.sort(function (a, b) { return a.id - b.id; });
            return towerTypes;
        }
    }

}(angular, LOCATIONS, CAMPAIGNS, MISSIONS, RAIDS, BATTLEGROUNDS, MAP_BATTLEGROUNDS));
