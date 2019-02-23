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
            $scope.locations = toArray(LOCATIONS)
                .sort(function (locationA, locationB) {
                    return Number(locationA.id) - Number(locationB.id);
                });
            $scope.campaigns = toArray(CAMPAIGNS);
            $scope.missions = toArray(MISSIONS);

            $scope.mapBattlegrounds = toArray(MAP_BATTLEGROUNDS);

            $scope.campaignBGEs = [];

            $scope.tower = false;
            $scope.auto = false;

            $scope.debugMode = false;

            $scope.selections = {
                location: '',
                campaign: '',
                mission: '',
                raid: ''
            };

            $scope.filteredRaids = getFilteredRaids();
            $scope.getLocationClass = getLocationClass;
            $scope.getCampaignClass = getCampaignClass;
            $scope.selectableBattlegrounds = getSelectableBattlegrounds();
            $scope.personalBattlegrounds = getPersonalBattlegrounds();
            $scope.towerTypes = getTowerTypes();

            $scope.$watch("selections.location", resetCampaign);

            $scope.$watch("selections.campaign", resetMission);
        }

        function resetCampaign() {
            $scope.selections.campaign = '';
        }

        function resetMission() {
            $scope.selections.mission = '';
        }

        function toArray(object) {
            return Object.keys(object)
                .sort(function (a, b) {
                    return Number(a) - Number(b);
                })
                .map(function(key) {
                    return object[key];
                });
        }

        function getSelectableBattlegrounds() {
            return Object.keys(BATTLEGROUNDS)
                .map(Number)
                .sort()
                .map(getBgeById)
                .filter(function shouldBeShown(BGE) {
                    return !(BGE.hidden || BGE.isTower);
                });
        }

        function getPersonalBattlegrounds() {
            return Object.keys(BATTLEGROUNDS)
                .map(Number)
                .filter(function normalBge(bgeID) {
                    return(bgeID > 1000 && bgeID < 2000);
                })
                .sort()
                .map(getBgeById);
        }
        
        function getBgeById(bgeID) {
            return BATTLEGROUNDS[bgeID];
        }

        function getFilteredRaids() {
            var filtered = Object.keys(RAIDS)
                .reduce(function mostRecentByName(mostRecent, nextRaidId) {
                    var nextRaid = RAIDS[nextRaidId];
                    var currentRaid = mostRecent[nextRaid.name];
                    if(!currentRaid || Number(currentRaid.id) < Number(nextRaid.id)) {
                        mostRecent[nextRaid.name] = nextRaid;
                    }
                    return mostRecent;
                }, {});

            return toArray(filtered)
                .sort(function sortByName(raidA, raidB) {
                    return raidA.name.toLowerCase().localeCompare(raidB.name.toLowerCase());
                });
        }

        function getLocationClass(location) {
            if (!location) {
                var selected = $scope.selections.location;
                location = $scope.locations.find(function (location) {
                    return location.id === selected;
                });
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
                campaign = $scope.campaigns.find(function (campaign) {
                    return campaign.id === selected;
                });
            }
            if (!campaign) {
                return "grey";
            } else if (campaign.side_mission) {
                return (campaign.location_id === '0' ? "heroUpgrade" : "mythic");
            } else if (campaign.isLocation) {
                return "location";
            } else {
                return "black";
            }
        }

        function getTowerTypes() {
            var towerTypes = [];
            for (var id in BATTLEGROUNDS) {
                var BGE = BATTLEGROUNDS[id];
                if (BGE.isTower) towerTypes.push(BGE);
            }
            towerTypes.sort(function (a, b) { return a.id - b.id; });
            return towerTypes;
        }
    }

}(angular, LOCATIONS, CAMPAIGNS, MISSIONS, RAIDS, BATTLEGROUNDS, MAP_BATTLEGROUNDS));
