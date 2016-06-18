(function (angular)
{
    'use strict';

    var CardDetailsCtrl = function ($scope, $window)
    {
        if ($scope.id && $scope.level)
        {
            $scope.unit = $window.makeUnitInfo($scope.id, $scope.level),
            $scope.card = $window.getCardInfo($scope.unit);
        }
        

        $scope.getCardImage = function ()
        {
            return "res/cardImagesLarge/" + loadCard($scope.card.id).picture + ".jpg";;
        }

        $scope.getRarityString = function ()
        {
            return $window.rarityStrings[$scope.card.rarity];
        }

        $scope.getRarityIcon = function ()
        {
            var card = $scope.card;
            return "res/cardAssets/" + "Level_" + card.rarity + "_" + card.level + ".png";
        }

        var getFusion = $scope.getFusion = function ()
        {
            var id = Number($scope.id);
            return (Math.floor(id / 10000) + 1);
        }

        $scope.keyPress = function (keyEvent)
        {
            console.log(keyEvent);
        }

        $scope.isFused = function () {
            return (getFusion() > 1);
        }

        $scope.getFusionIcon = function ()
        {
            var fusion = (getFusion() === 2 ? "Dualfuse" : "Quadfuse");
            return ("res/cardAssets/" + fusion + ".png");
        }

        $scope.getSkillIcon = function (skillName)
        {
            var src = "res/skills/";
            var iconName = skillName.charAt(0).toUpperCase() + skillName.slice(1) + '.png';
            switch (skillName)
            {
                case 'armored':
                    iconName = 'Armor.png';
                    break;
                case 'strike':
                    iconName = 'Bolt.png';
                    break;
                case 'poisonstrike':
                    iconName = 'Poisonbolt.png';
                    break;
                case 'burn':
                    iconName = 'Scorch.png';
                    break;
                case 'flurry':
                    iconName = 'Dualstrike.png';
                    break;
                case 'enfeeble':
                    iconName = 'Hex.png';
                    break;
                case 'jam':
                    iconName = 'Freeze.png';
                    break;
                case 'leech':
                    iconName = 'Siphon.png';
                    break;
                case 'evade':
                    iconName = 'Invisibility.png';
                    break;
                case 'counter':
                    iconName = 'Vengeance.png';
                    break;
                case 'protect':
                    iconName = 'Barrier.png';
                    break;
                case 'protect_ice':
                    iconName = "Iceshatter.png";
                    break;
                case 'rally':
                    iconName = 'Empower.png';
                    break;
                default:
                    iconName = (skillName.charAt(0).toUpperCase() + skillName.slice(1)) + ".png";
                    break;
            }
            src += iconName;
            return src;
        }

        $scope.getFaction = function (factionID)
        {
            return $window.factions.names[factionID];
        }

        $scope.decrementFusion = function ()
        {
            $scope.id = Number($scope.id);
            if ($scope.id > 10000)
            {
                $scope.id -= 10000;
            }
            $scope.unit.id = $scope.id;
            $scope.card = $window.getCardInfo($scope.unit);
        }

        $scope.incrementFusion = function ()
        {
            $scope.id = Number($scope.id);
            if ($scope.id < 20000)
            {
                $scope.id += 10000;
            }
            $scope.unit.id = $scope.id;
            $scope.card = $window.getCardInfo($scope.unit);
        }

        $scope.decrementLevel = function ()
        {
            $scope.level = Number($scope.level);
            if ($scope.level > 1)
            {
                $scope.level--;
            }
            $scope.unit.level = $scope.level;
            $scope.card = $window.getCardInfo($scope.unit);
        }

        $scope.incrementLevel = function ()
        {
            $scope.level = Number($scope.level);
            if ($scope.level < $scope.card.maxLevel)
            {
                $scope.level++;
            }
            $scope.unit.level = $scope.level;
            $scope.card = $window.getCardInfo($scope.unit);
        }
    };

    angular.module('simulatorApp')
        .controller('CardDetailsCtrl', ['$scope', '$window', CardDetailsCtrl])
        .directive('cardDetails', function ()
        {
            return {
                scope: {
                    id: "@unitId", 
                    level: "@unitLevel",
                },
                restrict: 'A',
                replace: true,
                templateUrl: 'templates/card-template.html',
                controller: CardDetailsCtrl
            }
        }).filter('capitalize', function ()
        {
            return function (input)
            {
                return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
            }
        });

}(angular));
