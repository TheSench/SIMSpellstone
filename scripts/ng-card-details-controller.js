(function (angular) {
  'use strict';
  
	var cardInfo = require('cardInfo');
  var skillApi = require('skillApi');
	var factions = require('factions');

  // Global arrays
  var rarityStrings = [
      "",
      "Common",
      "Rare",
      "Epic",
      "Legendary",
      "Mythic"
  ];

  function getCardInfo(unit) {
    var id = unit.id;
    var level = unit.level;

    var original = CARDS[id];

    var card = Object.assign({}, original);
    if (level > 1) {
      if (level > 1) {
        for (var key in original.upgrades) {
          var upgrade = original.upgrades[key];
          if (upgrade.cost !== undefined) card.cost = upgrade.cost;
          if (upgrade.health !== undefined) card.health = upgrade.health;
          if (upgrade.attack !== undefined) card.attack = upgrade.attack;
          if (upgrade.desc !== undefined) card.desc = upgrade.desc;
          if (upgrade.skill.length > 0) card.skill = upgrade.skill;
          if (key == level) break;
        }
      }
    }
    card.level = level;
    card.maxLevel = original.maxLevel;
    return card;
  }

  var CardDetailsCtrl = function ($scope, $window) {
    $window.cardDetailScope = $scope;
    if ($scope.id && $scope.level) {
      $scope.unit = $window.unitInfo.create($scope.id, $scope.level),
        $scope.card = getCardInfo($scope.unit);
    }

    $scope.setUnit = function (unit) {
      $scope.id = unit.id;
      $scope.level = unit.level;
      $scope.unit = $window.unitInfo.create($scope.id, $scope.level),
        $scope.card = getCardInfo($scope.unit);
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
    };

    $scope.visible = false;

    $scope.getCardImage = function () {
      var image = new Image();
      image.src = "res/cardImagesLarge/" + cardInfo.loadCard($scope.card.id).picture + ".jpg";

      image.onerror = function () {
        if (this.naturalHeight !== 330) {
          this.src = th.replace('ImagesLarge', 'Images');
          this.onload = null;
        }
        $modal.find('img').attr('src', this.src);
      };

      return "res/cardImagesLarge/" + cardInfo.loadCard($scope.card.id).picture + ".jpg";
    };

    var image;
    $scope.imageSrc = "res/cardImagesLarge/NotFound.jpg";
    $scope.$watch('card.id', function (newValue, oldValue) {
      if (newValue) {
        var extension = ".jpg";
        if (cardInfo.isCommander(newValue)) {
          extension = ".png";
        }
        image = new Image();
        image.onerror = function () {
          this.onerror = function () {
            this.onerror = null;
            this.src = "res/cardImagesLarge/NotFound.jpg";
          };
          this.src = this.src.replace('ImagesLarge', 'Images');
        };
        image.onload = function () {
          this.onerror = null;
          this.onload = null;
          $scope.imageSrc = image.src;
          $scope.$apply();
        };
        image.src = "res/cardImagesLarge/" + cardInfo.loadCard(newValue).picture + extension;
      }
      else {
        $scope.imageSrc = "res/cardImagesLarge/NotFound.jpg";
      }
    });

    $scope.isCommander = function () {
      return $window.cardInfo.isCommander($scope.id);
    };

    $scope.commanderClass = function () {
      if ($scope.isCommander()) {
        return "commander " + $scope.getFaction($scope.card.type).toLowerCase();
      } else {
        return '';
      }
    };

    $scope.getRarityString = function () {
      return rarityStrings[$scope.card.rarity];
    };

    $scope.fontSize = function () {
      var rarityString = $("#rarity-string").text();
      var numChars = rarityString.length;
      var fontSize = Math.ceil(71000 / (numChars * numChars));
      return {
        "font-size": fontSize + "px"
      };
    };

    $scope.showRarity = function () {
      var card = $scope.card;
      if (card.rarity > 0) {
        return true;
      } else if (card.maxLevel > 1) {
        return true;
      } else {
        return false;
      }
    };
    $scope.getRarityIcon = function () {
      var card = $scope.card;
      if (card.rarity > 0) {
        var rarityType = card.rarity + ((card.maxLevel > Number(card.rarity) + 2) ? '_' + card.maxLevel : '');
        return "res/cardAssets/Level_" + rarityType + "_" + card.level + ".png";
      } else if (card.maxLevel > 1) {
        return "res/cardAssets/" + card.maxLevel + "_" + card.level + ".png";
      }
    };

    var previousFusion = $scope.previousFusion = function () {
      var fusions = $window.FUSIONS;
      for (var key in fusions) {
        if (fusions[key] === $scope.id) {
          return key;
        }
      }
      return false;
    };

    var nextFusion = $scope.nextFusion = function () {
      return $window.FUSIONS[$scope.id];
    };

    $scope.previousLevel = function () {
      return ($scope.card.level > 1);
    };

    $scope.nextLevel = function () {
      return ($scope.card.level < $scope.card.maxLevel);
    };

    var getFusion = $scope.getFusion = function () {
      var id = Number($scope.id);
      return (Math.floor(id / 10000) + 1);
    };

    $scope.fusionText = function () {
      var fusion = getFusion();
      return {
        1: 'Single',
        2: 'Dual',
        3: 'Quad'
      }[fusion];
    };

    $scope.keyPress = function (event) {
      var fn;
      switch (event.which) {
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
      if (fn) {
        $scope[fn]();
        event.preventDefault();
        event.stopPropagation();
      }
    };

    $scope.isFused = function () {
      return (getFusion() > 1);
    };

    $scope.getFusionIcon = function () {
      var fusion = (getFusion() === 2 ? "Dualfuse" : "Quadfuse");
      return ("res/cardAssets/" + fusion + ".png");
    };

    $scope.getSkillIcon = function (skillID) {
      var skillData = SKILL_DATA[skillID];
      return "res/skills/" + (skillData ? skillData.icon : skillID) + ".png";
    };

    $scope.getSkillDescription = function (skillID) {
      var skillData = SKILL_DATA[skillID];
      return (skillData ? skillData.desc || skillData.name : skillID);
    };

    var setNames = {
      1000: "Basic",
      7000: "Basic",
      2000: "Reward",
      3000: "Premium",
      4000: "BoxOnly",
      9999: "StoryElements"
    };
    $scope.getSetIcon = function () {
      var setName = setNames[$scope.card.set];
      if (!setName) setName = setNames[9999];
      return ('res/cardAssets/' + setName + '_64x64.png');
    };

    $scope.getFaction = function (factionID) {
      var faction = factions.names[factionID];
      if (faction === "Tower") {
        faction = "";
      }
      return faction;
    };

    $scope.decrementFusion = function () {
      var fused = previousFusion(Number($scope.id));
      if (fused) {
        $scope.id = fused;
        $scope.unit.id = $scope.id;
        $scope.card = getCardInfo($scope.unit);
        if ($scope.level > $scope.card.maxLevel) {
          $scope.level = $scope.card.maxLevel;
          $scope.unit.level = $scope.level;
          $scope.card = getCardInfo($scope.unit);
        }
      }
    };

    $scope.incrementFusion = function () {
      var fused = nextFusion(Number($scope.id));
      if (fused) {
        var max = ($scope.level == $scope.card.maxLevel);
        $scope.id = fused;
        $scope.unit.id = $scope.id;
        $scope.card = getCardInfo($scope.unit);
        if (max && $scope.level < $scope.card.maxLevel) {
          $scope.level = $scope.card.maxLevel;
          $scope.unit.level = $scope.level;
          $scope.card = getCardInfo($scope.unit);
        }
      }
    };

    $scope.decrementLevel = function () {
      $scope.level = Number($scope.level);
      if ($scope.level > 1) {
        $scope.level--;
      }
      $scope.unit.level = $scope.level;
      $scope.card = getCardInfo($scope.unit);
    };

    $scope.incrementLevel = function () {
      $scope.level = Number($scope.level);
      if ($scope.level < $scope.card.maxLevel) {
        $scope.level++;
      }
      $scope.unit.level = $scope.level;
      $scope.card = getCardInfo($scope.unit);
    };
  };

  var DeckBuilderCtrl = function ($scope, $window) {
    $scope.getSkillIcon = function (skillID) {
      var skillData = SKILL_DATA[skillID];
      return "res/skills/" + (skillData ? skillData.icon : skillID) + ".png";
    };

    $scope.supportedSkills = [
      'absorb',
      'armored',
      'backlash',
      'barrage',
      'berserk',
      'burn',
      //'burn2',
      'corrosive',
      'counter',
      'counterburn',
      'daze',
      'enfeeble',
      'enhance',
      //'enlarge',
      'enrage',
      'evade',
      'evadebarrier',
      'fervor',
      'flurry',
      'frost',
      'fury',
      'heal',
      'heartseeker',
      //'ignite',
      'imbue',
      //'intensify',
      'jam',
      'leech',
      'legion',
      //'mark',
      'nullify',
      'pierce',
      'poison',
      'poisonstrike',
      'protect',
      //'protect_ice',
      //'protect_seafolk',
      'rally',
      //'reanimate',
      //'resurrect',
      'regenerate',
      'scorchbreath',
      'silence',
      //'slow',
      'stasis',
      'strike',
      'taunt',
      'valor',
      //'venom',
      'weaken',
      'weakenself'
    ].sort(function (idA, idB) {
      return SKILL_DATA[idA].name.localeCompare(SKILL_DATA[idB].name);
    });

    $scope.getSkillName = function (skillID) {
      var skillData = SKILL_DATA[skillID];
      return (skillData ? skillData.name : skillID);
    };

    $scope.showAdvancedFilters = $window.showAdvancedFilters;

    $scope.filterSkill = function (event, skillID) {
      $window.filterSkill(event.target, skillID, event.altKey);
    };
  };

  angular.module('simulatorApp')
    .controller('CardDetailsCtrl', ['$scope', '$window', CardDetailsCtrl])
    .directive('ngRightClick', ['$parse', function ($parse) {
      return {
        link: function (scope, element, attrs) {
          var fn = $parse(attrs.ngRightClick);
          element.contextmenu(function (event) {
            scope.$apply(function () {
              event.preventDefault();
              fn(scope, { $event: event });
            });
          });
        }
      };
    }])
    .directive('cardDetails', function () {
      return {
        restrict: 'A',
        replace: true,
        templateUrl: 'templates/card-template.html',
        controller: 'CardDetailsCtrl'
      };
    })
    .directive('sssAutofocus', function () {
      return {
        link: function (scope, elem, attr) {
          elem.focus();
        }
      };
    })
    .filter('capitalize', function () {
      return function (input) {
        if (input) {
          var parts = input.split(' ');
          for (var i = 0; i < parts.length; i++) {
            var part = parts[i];
            parts[i] = part.charAt(0).toUpperCase() + part.substr(1);
          }
          return parts.join(" ");
        }
        else {
          return '';
        }
      };
    })
    .filter('skillApi.nameFromId', function () {
      return window.skillApi.nameFromId;
    })
    .controller('DeckBuilderCtrl', ['$scope', '$window', DeckBuilderCtrl]);

}(angular));
