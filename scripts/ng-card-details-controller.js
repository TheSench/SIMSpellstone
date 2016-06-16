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

        $scope.fuse = function ()
        {
            var unit = $scope.unit;
            if (unit.id < 20000)
            {
                unit.id += 10000;
            }
            $scope.card = $window.getCardInfo(unit);

        }
    };

    angular.module('cardDetailsApp', [])
        .controller('CardDetailsCtrl', ['$scope', '$window', CardDetailsCtrl])
        .directive('myCard', function ()
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
