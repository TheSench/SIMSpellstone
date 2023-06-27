﻿'use strict';

var loadDeckDialog;
var mapBGEDialog;

$(function () {
    $("#deck1").change(function () {
        this.value = this.value.trim();
        deckChanged("attack_deck", hash_decode(this.value), 'player');
    });

    $("#deck2").change(function () {
        this.value = this.value.trim();
        deckChanged("defend_deck", hash_decode(this.value), 'cpu');
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
        if (!_DEFINED("seedtest")) {
            var simConfig = SIM_CONTROLLER.getConfiguration();
            SIMULATOR.config = simConfig;
            var battlegrounds = getBattlegrounds(simConfig);
            battlegrounds = battlegrounds.onCreate.filter(function (bge) {
                return !((owner === 'player' && bge.enemy_only) || (owner === 'cpu' && bge.ally_only));
            });

            $deck.append(CARD_GUI.makeDeckHTML(newDeck, false, battlegrounds));
        }
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
                var deck = hash_decode(hashField.val());
                var array = deck.deck;
                array.splice(newPos, 0, array.splice(origPos, 1)[0]);
                var hash = hash_encode(deck);
                hashField.val(hash);
            }
        });
    }

    function onDeckLoaded(newHash, hashField) {
        $(hashField).val(newHash).change();
    }

    function loadDeck(hashField) {
        $('label[for="loadDeckName"]').html('<strong>Deck:</strong>');
        loadDeckDialog.dialog("open");
        loadDeckDialog.dialog("option", "position", { my: "center", at: "center", of: window });
    
        loadDeckDialog.hashField = hashField;
    }
    document.querySelector('#load-player').addEventListener('click', function () { loadDeck('#deck1'); });
    document.querySelector('#load-cpu').addEventListener('click', function () { loadDeck('#deck2'); });

    document.querySelector('#config-map-bge').addEventListener('click', function showMapBGEs() {
        mapBGEDialog.dialog("open");
        mapBGEDialog.dialog("option", "position", { my: "center", at: "center", of: window });
    });

    var dark = false;
    document.querySelector('#toggleTheme').addEventListener('click', function toggleTheme() {
        if (dark) {
            $("#theme").attr("href", "dist/light.min.css");
            $("#toggleTheme").val("Dark Theme");
        } else {
            $("#theme").attr("href", "dist/dark.min.css");
            $("#toggleTheme").val("Light Theme");
        }
        dark = !dark;
    });

    $(".accordion").accordion({
        collapsible: true,
        active: false,
        heightStyle: "content"
    }).filter(".start-open").accordion('option', 'active', 0);

    $("#raid, #raid_level").change(function () {
        var newDeck;
        var selectedRaid = $("#raid").val();
        var raidLevel = $('#raid_level');
        if (selectedRaid) {
            newDeck = load_deck_raid(selectedRaid, raidLevel.val());
            if (RAIDS[selectedRaid].type === "Dungeon") {
                raidLevel.attr("max", 500);
            } else {
                raidLevel.attr("max", 40);
            }
        } else {
            newDeck = hash_decode('');
            raidLevel.attr("max", 40);
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
            newDeck = load_deck_mission(missionID, missionLevel);
        } else {
            newDeck = hash_decode('');
        }
        deckChanged("defend_deck", newDeck, 'cpu');
    });

    loadDeckDialog = $("#loadDeckDialog").dialog({
        autoOpen: false,
        minWidth: 320,
        modal: true,
        resizable: false,
        buttons: {
            Delete: function () {
                var name = $("#loadDeckName").val();
                storageAPI.deleteDeck(name);
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

    deckChanged("attack_deck", hash_decode(''));
    deckChanged("defend_deck", hash_decode(''));

    // Disable this as we now draw the full deck
    debug_dump_decks = function () { };

    setDeckSortable("#attack_deck", '#deck1');
    setDeckSortable("#defend_deck", '#deck2');

    processQueryString();
});


var frames = [];
var frameInterval = null;
function drawField(field, hand, callback, turn, activeUnit) {
    var newFrame = CARD_GUI.doDrawField(field, hand, callback, turn, activeUnit);
    frames.push(newFrame);
    if (!frameInterval) {
        drawFrames();
        frameInterval = setInterval(drawFrames, 500);
    }
}

function clearFrames() {
    frames = [];
    clearInterval(frameInterval);
    frameInterval = null;
}

var disabledInterval = false;
function drawFrames() {
    if (frames.length === 0) {
        if (disabledInterval) {
            clearInterval(frameInterval);
            frameInterval = null;
        } else {
            disabledInterval = true;
        }
    } else {
        var frame = frames.splice(0, 1)[0];
        $("#cardSpace").children().remove().end().append(frame);
        disabledInterval = false;
    }
}