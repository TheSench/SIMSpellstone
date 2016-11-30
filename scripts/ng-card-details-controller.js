(function (angular)
{
    'use strict';

    var CardDetailsCtrl = function ($scope, $window)
    {
        $window.cardDetailScope = $scope;
        if ($scope.id && $scope.level)
        {
            $scope.unit = $window.makeUnitInfo($scope.id, $scope.level),
            $scope.card = $window.getCardInfo($scope.unit);
        }

        $scope.setUnit = function (unit)
        {
            $scope.id = unit.id;
            $scope.level = unit.level;
            $scope.unit = $window.makeUnitInfo($scope.id, $scope.level),
            $scope.card = $window.getCardInfo($scope.unit);
            $scope.releaseDate = (function () {
                var hiddenUntil = $scope.card.hidden_until;
                if (hiddenUntil) {
                    hiddenUntil = new Date(Number(hiddenUntil));
                    hiddenUntil = (hiddenUntil.getMonth() + 1) + "/" + hiddenUntil.getDate() + "/" + hiddenUntil.getFullYear();
                } else {
                    hiddenUntil = "";
                }
                return hiddenUntil;
            }());
            return this;
        }

        $scope.getCardImage = function ()
        {
            var image = new Image();
            image.src = "res/cardImagesLarge/" + loadCard($scope.card.id).picture + ".jpg";

            image.onerror = function ()
            {
                if (this.naturalHeight != 330)
                {
                    this.src = th.replace('ImagesLarge', 'Images');
                    this.onload = null;
                }
                $modal.find('img').attr('src', this.src);
            }

            return "res/cardImagesLarge/" + loadCard($scope.card.id).picture + ".jpg";
        }

        var image;
        $scope.imageSrc = "res/cardImagesLarge/NotFound.jpg"
        $scope.$watch('card.id', function (newValue, oldValue)
        {
            if (newValue)
            {
                var extension = ".jpg";
                if (is_commander(newValue))
                {
                    extension = ".png";
                }
                image = new Image();
                image.onerror = function ()
                {
                    this.onerror = null;
                    this.src = this.src.replace('ImagesLarge', 'Images');
                };
                image.onload = function ()
                {
                    this.onerror = null;
                    this.onload = null;
                    $scope.imageSrc = image.src;
                    $scope.$apply();
                }
                image.src = "res/cardImagesLarge/" + loadCard(newValue).picture + extension;
            }
            else
            {
                $scope.imageSrc = "res/cardImagesLarge/NotFound.jpg"
            }
        });

        $scope.isCommander = function () {
            return $window.is_commander($scope.id);
        };

        $scope.commanderClass = function () {
            if ($scope.isCommander()) {
                return "commander " + $scope.getFaction($scope.card.type).toLowerCase();
            } else {
                return '';
            }
        }

        $scope.getRarityString = function ()
        {
            return $window.rarityStrings[$scope.card.rarity];
        }

        $scope.fontSize = function () {
            var rarityString = $("#rarity-string").text();
            var numChars = rarityString.length;
            var fontSize = Math.ceil(71000 / (numChars * numChars));
            return {
                "font-size": fontSize + "px"
            };
        }

        $scope.showRarity = function ()
        {
            var card = $scope.card;
            if (card.rarity > 0) {
                return true;
            } else if (card.maxLevel > 1) {
                return true;
            } else {
                return false;
            }
        }
        $scope.getRarityIcon = function ()
        {
            var card = $scope.card;
            if (card.rarity > 0)
            {
                return "res/cardAssets/Level_" + card.rarity + "_" + card.level + ".png";
            } else if (card.maxLevel > 1)
            {
                return "res/cardAssets/" + card.maxLevel + "_" + card.level + ".png";
            }
        }

        var previousFusion = $scope.previousFusion = function ()
        {
            var fusions = $window.FUSIONS;
            for (var key in fusions)
            {
                if (fusions[key] == $scope.id)
                {
                    return key;
                }
            }
            return false;
        }

        var nextFusion = $scope.nextFusion = function ()
        {
            return $window.FUSIONS[$scope.id];
        };

        $scope.previousLevel = function ()
        {
            return ($scope.card.level > 1);
        };

        $scope.nextLevel = function ()
        {
            return ($scope.card.level < $scope.card.maxLevel);
        };

        var getFusion = $scope.getFusion = function ()
        {
            var id = Number($scope.id);
            return (Math.floor(id / 10000) + 1);
        }

        $scope.fusionText = function ()
        {
            var fusion = getFusion();
            return {
                1: 'Single',
                2: 'Dual',
                3: 'Quad'
            }[fusion]
        }

        $scope.keyPress = function (event)
        {
            var fn;
            switch (event.which)
            {
                case 37:
                    fn = 'decrementLevel';
                    break;
                case 38:
                    fn = 'incrementFusion';
                    break;
                case 39:
                    fn = 'incrementLevel';
                    break;
                case 40:
                    fn = 'decrementFusion';
                    break;
            }
            if (fn)
            {
                $scope[fn]();
                event.preventDefault();
                event.stopPropagation();
            }
        }

        $scope.isFused = function ()
        {
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

        var setNames = {
            1000: "Basic",
            7000: "Basic",
            2000: "Reward",
            3000: "Premium",
            4000: "BoxOnly",
            9999: "StoryElements"
        }
        $scope.getSetIcon = function ()
        {
            var setName = setNames[$scope.card.set];
            if (!setName) setName = setNames[9999];
            return ('res/cardAssets/' + setName + '_64x64.png');
        }

        $scope.getFaction = function (factionID)
        {
            var faction = $window.factions.names[factionID];
            if (faction == "Tower") {
                faction = "";
            }
            return faction;
        }

        $scope.decrementFusion = function ()
        {
            var fused = previousFusion(Number($scope.id));
            if (fused)
            {
                $scope.id = fused;
                $scope.unit.id = $scope.id;
                $scope.card = $window.getCardInfo($scope.unit);
                if ($scope.level > $scope.card.maxLevel)
                {
                    $scope.level = $scope.card.maxLevel;
                    $scope.unit.level = $scope.level;
                    $scope.card = $window.getCardInfo($scope.unit);
                }
            }
        }

        $scope.incrementFusion = function ()
        {
            var fused = nextFusion(Number($scope.id));
            if (fused)
            {
                var max = ($scope.level == $scope.card.maxLevel);
                $scope.id = fused;
                $scope.unit.id = $scope.id;
                $scope.card = $window.getCardInfo($scope.unit);
                if (max && $scope.level < $scope.card.maxLevel)
                {
                    $scope.level = $scope.card.maxLevel;
                    $scope.unit.level = $scope.level;
                    $scope.card = $window.getCardInfo($scope.unit);
                }
            }
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
                if (!!input)
                {
                    var parts = input.split(' ');
                    for (var i = 0; i < parts.length; i++)
                    {
                        var part = parts[i];
                        parts[i] = part.charAt(0).toUpperCase() + part.substr(1);
                    }
                    return parts.join(" ");
                }
                else
                {
                    return ''
                };
            }
        }).filter('convertName', function ()
        {
            return window.convertName;
        });

}(angular));
