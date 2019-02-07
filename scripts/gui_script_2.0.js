'use strict';

var loadDeckDialog;
var mapBGEDialog;

$(function () {
    var bgeApi = require('bgeApi');
    var base64 = require('base64');
    var urlHelpers = require('urlHelpers');
    var loadDeck = require('loadDeck');
    var cardUI = require('cardUI');
    var simController = require('simController');
    
    $("#deck1").change(function () {
        this.value = this.value.trim();
        deckChanged("attack_deck", base64.decodeHash(this.value), 'player');
    });

    $("#deck2").change(function () {
        this.value = this.value.trim();
        deckChanged("defend_deck", base64.decodeHash(this.value), 'cpu');
    });

    $("#battleground").change(function () {
        $("#deck1").change();
        if ($("#deck2").val()) {
            $("#deck2").change();
        } else if ($("#mission").val()) {
            $("#mission").change();
        } else if ($("#raid").val()) {
            $("#raid").change();
        }
    });

    var bges = $('label[bge-desc]');
    for (var i = 0; i < bges.length; i++) {
        var lblBge = $(bges[i]);
        lblBge.hover(showTooltip, hideTooltip);
        /*
        var tooltip = $('<div class="tooltip">' + lblBge.attr("bge-desc") + '</div>');
        var parent = lblBge.parent();
        parent.append($('<div></div>').append([lblBge.prev(), lblBge, tooltip]));
        */
    }

    function showTooltip(event) {
        var $container = $("#tooltip");
        var $text = $("#tooltip-text");

        $text.html($(event.target).attr('bge-desc'));
        $text.width(200);
        $container.show();

        $("#tooltip .arrow")
            .css("borderTopWidth", 0)
            .css("borderBottomWidth", 0);

        var offset = $(event.target).offset();
        offset.left -= 230;
        offset.top -= ($container.outerHeight() / 2) - 10;
        $container.offset(offset);

        var arrowHeight = $text.innerHeight() / 2 - 4;

        $("#tooltip .arrow")
            .css("borderTopWidth", arrowHeight)
            .css("borderBottomWidth", arrowHeight);
    }

    function hideTooltip(event) {
        $("#tooltip").hide();
    }

    function deckChanged(deckID, newDeck, owner) {
        var $deck = $("#" + deckID);
        $deck.children().remove();
        if (!urlHelpers.paramDefined("seedtest")) {
            var config = simController.getConfiguration();
            var battlegrounds = bgeApi.getBattlegrounds(getbattleground, selfbges, enemybges, mapbges, config.selectedCampaign, missionlevel, getraid, raidlevel);
            battlegrounds = battlegrounds.onCreate.filter(function (bge) {
                return !((owner === 'player' && bge.enemy_only) || (owner === 'cpu' && bge.ally_only));
            });

            $deck.append(cardUI.makeDeckHTML(newDeck, false, battlegrounds));
        }
    }
    var accordions = $(".accordion").accordion({
        collapsible: true,
        active: false,
        heightStyle: "content"
    }).filter(".start-open").accordion('option', 'active', 0);

    $("#raid, #raid_level").change(function () {
        var newDeck;
        var selectedRaid = $("#raid").val();
        var raidlevel = $('#raid_level');
        if (selectedRaid) {
            newDeck = loadDeck.raid(selectedRaid, raidlevel.val());
            if (RAIDS[selectedRaid].type === "Dungeon") {
                raidlevel.attr("max", 150);
            } else {
                raidlevel.attr("max", 40);
            }
        } else {
            newDeck = base64.decodeHash('');
            raidlevel.attr("max", 40);
        }

        deckChanged("defend_deck", newDeck, 'cpu');
    });

    $("#location, #campaign").change(function () {
        $("#mission").change();
    });

    $("#mission, #mission_level").change(function () {
        var newDeck;
        var missionID = $('#mission').val();
        if (missionID) {
            var missionLevel = $('#mission_level').val();
            newDeck = loadDeck.mission(missionID, missionLevel);
        } else {
            newDeck = base64.decodeHash('');
        }
        deckChanged("defend_deck", newDeck, 'cpu');
    });

    loadDeckDialog = $("#loadDeckDialog").dialog({
        autoOpen: false,
        minWidth: 320,
        /*
        minHeight: 20,
        */
        modal: true,
        resizable: false,
        buttons: {
            Delete: function () {
                var name = $("#loadDeckName").val();
                var newHash = storageAPI.deleteDeck(name);
            },
            Load: function () {
                var name = $("#loadDeckName").val();
                var newHash = storageAPI.loadDeck(name);
                onDeckLoaded(newHash, loadDeckDialog.hashField);
                loadDeckDialog.dialog("close");
            },
            Cancel: function () {
                loadDeckDialog.dialog("close");
            }
        }
    });
    mapBGEDialog = $("#bgeDialog").dialog({
        autoOpen: false,
        minWidth: 320,
        modal: true,
        resizable: false,
        buttons: {
            OK: function () {
                mapBGEDialog.dialog("close");
            },
            Cancel: function () {
                mapBGEDialog.dialog("close");
            }
        }
    });

    deckChanged("attack_deck", base64.decodeHash(''));
    deckChanged("defend_deck", base64.decodeHash(''));

    setDeckSortable("#attack_deck", '#deck1');
    setDeckSortable("#defend_deck", '#deck2');

    if (urlHelpers.paramDefined("latestCards")) {
        var callback = null;
        if (urlHelpers.paramDefined("autostart")) {
            callback = function () {
                simController.startsim(1);
            };
        }
        updateGameData(callback);
    } else {
        loadCardCache();
    }

    processQueryString();
});

function doneLoading() {
    $("body").removeClass("loading");
    checkTutorial();
}

function updateGameData(callback) {
    var done = doneLoading;
    if (callback) {
        done = function () {
            doneLoading();
            callback();
        };
    }
    DATA_UPDATER.updateData(done, true);
}

function setDeckSortable(deckField, associatedHashField) {
    $(deckField).sortable({
        items: '.card:not(.commander):not(.blank)',
        tolerance: "intersect",
        helper: function (event, ui) {
            return ui.clone();
        },
        start: function (event, ui) {
            var origPos = ui.placeholder.index() - 1;
            ui.item.data('origPos', origPos);
            $(ui.item).hide();
        },
        stop: function (event, ui) {
            var origPos = ui.item.data('origPos') - 1;
            var newPos = ui.item.index() - 1;

            var hashField = $(associatedHashField);
            var deck = base64.decodeHash(hashField.val());
            var array = deck.deck;
            array.splice(newPos, 0, array.splice(origPos, 1)[0]);
            var hash = base64.encodeHash(deck);
            hashField.val(hash);
        }
    });
}

function showMapBGEs() {
    mapBGEDialog.dialog("open");
    mapBGEDialog.dialog("option", "position", { my: "center", at: "center", of: window });
}

function loadDeck(hashField) {
    $('label[for="loadDeckName"]').html('<strong>Deck:</strong>');
    loadDeckDialog.dialog("open");
    loadDeckDialog.dialog("option", "position", { my: "center", at: "center", of: window });

    loadDeckDialog.hashField = hashField;
}

function onDeckLoaded(newHash, hashField) {
    $(hashField).val(newHash).change();
}

var dark = false;
function toggleTheme() {
    if (dark) {
        $("#theme").attr("href", "dist/light.min.css");
        $("#toggleTheme").val("Dark Theme");
    } else {
        $("#theme").attr("href", "dist/dark.min.css");
        $("#toggleTheme").val("Light Theme");
    }
    dark = !dark;
}