define('startup', [
	'base64',
	'urlHelper',
	'simController',
	'bgeApi',
	'cardUI',
	'loadDeck',
	'loadCardCache',
	'ui'
], function (
	base64,
	urlHelper,
	simController,
	bgeApi,
	cardUI,
	loadDeck,
	loadCardCache,
	ui
) {
	'use strict';

    var mapBGEDialog;
	var deckPopupDialog;

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

    function hideTooltip() {
        $("#tooltip").hide();
    }

    function deckChanged(deckID, newDeck, owner) {
        var $deck = $("#" + deckID);
        $deck.children().remove();
        if (!urlHelper.paramDefined("seedtest")) {
			var config = ui.getConfiguration();
			simController.setDebugLogger();
            var battlegrounds = bgeApi.getBattlegrounds(config.getbattleground, config.selfbges, config.enemybges, config.mapbges, config.selectedCampaign, config.missionLevel, config.selectedRaid, config.raidLevel);
            battlegrounds = battlegrounds.onCreate.filter(function (bge) {
                return !((owner === 'player' && bge.enemy_only) || (owner === 'cpu' && bge.ally_only));
            });

            $deck.append(cardUI.deckToHtml(newDeck, false, battlegrounds));
        }
    }

    function showMapBGEs() {
        mapBGEDialog.dialog("open");
        mapBGEDialog.dialog("option", "position", { my: "center", at: "center", of: window });
    }

	function displayGeneratedLink() {
		ui.displayText('' +
			'<br>' +
			'<i>Non-autostart link</i>' +
			'<br>' +
			'<a href="' + ui.generateLink() + '">' + ui.generateLink() + '</a>' +
			'<br>' +
			'<br>' +
			'<i>Autostart link</i>' +
			'<br>' +
			'<a href="' + ui.generateLink(1) + '">' + ui.generateLink(1) + '</a>' +
			'<br>' +
			'<br>' +
			'');
	}

	function setSelectedMapBattlegrounds(mapBgeString) {
		var selects = document.getElementsByName("map-battleground");
		for (var i = 0; i < mapBgeString.length && i < selects.length; i++) {
			selects[i].value = mapBgeString[i];
		}
	}

	// When Page Loads...
	function processQueryString() {

		$("#header").load("templates/header.html", function () {
			if (typeof showTutorial !== "undefined") {
				$("#help").click(showTutorial);
			}
		});
		$.holdReady(true);
		$("#footer").load("templates/footer.html", function () {
			$.holdReady(false);
		});

		var ui = document.getElementById('ui');
		if (!ui) return 0;

		$("#generate_link").on("click", displayGeneratedLink);

		$("#btn_simulate").on("click", simController.startsim);
		$("#btnStop").on("click", simController.stopsim);

		$('#deck1').val(urlHelper.paramValue('deck1')).change();
		$('#deck2').val(urlHelper.paramValue('deck2')).change();

		$('#surge').prop("checked", urlHelper.paramDefined("surge"));
		$('#siege').prop("checked", urlHelper.paramDefined("siege"));
		var towerLevel = Math.min(Math.max(urlHelper.paramValue('tower_level') || 18, 0), 18);
		$('#tower_level').val(towerLevel);

		var towerType = (urlHelper.paramValue('tower_type') || 501);
		$("#tower_type").val(towerType);

		$('#auto_mode').prop("checked", urlHelper.paramDefined("auto_mode"));
		$('#tournament').prop("checked", urlHelper.paramDefined("tournament"));
		$('#ordered').prop("checked", urlHelper.paramDefined("ordered"));
		$('#exactorder').prop("checked", urlHelper.paramDefined("exactorder"));

		$('#ordered2').prop("checked", urlHelper.paramDefined("ordered2"));
		$('#exactorder2').prop("checked", urlHelper.paramDefined("exactorder2"));

		var locationID = urlHelper.paramValue('location');
		var campaignID = urlHelper.paramValue('campaign');
		var missionID = urlHelper.paramValue('mission');
		var raidID = urlHelper.paramValue('raid');
		if (locationID) $('#location').val(locationID).change();
		if (campaignID) {
			if (!locationID) {
				locationID = CAMPAIGNS[campaignID].location_id;
				$('#location').val(locationID).change();
			}
			$('#campaign').val(campaignID).change();
		}
		if (missionID) {
			$('#mission_level').val(urlHelper.paramValue('mission_level') || 7);
			$('#mission').val(missionID).change();
		}
		if (raidID) {
			$('#raid_level').val(urlHelper.paramValue('raid_level') || 25);
			$('#raid').val(raidID).change();
		}

		if (urlHelper.paramDefined("bges")) {
			var bges = urlHelper.paramValue('bges');
			// Each BGE is a 2-character ID in Base64
			for (var i = 0; i < bges.length; i += 2) {
				var bge = base64.toDecimal(bges.substring(i, i + 2));
				$("#battleground_" + bge).prop('checked', true);
			}
		} else {
			// Load current battlegrounds
			for (var i = 0; i < current_bges.length; i++) {
				$("#battleground_" + current_bges[i]).prop('checked', true);
			}
		}
		var bges = urlHelper.paramValue('selfbges');
		if (bges) {
			// Each BGE is a 2-character ID in Base64
			for (var i = 0; i < bges.length; i += 2) {
				var bge = base64.toDecimal(bges.substring(i, i + 2)) + 10000;
				$("#self-battleground_" + bge).prop('checked', true);
			}
		}
		var bges = urlHelper.paramValue('enemybges');
		if (bges) {
			// Each BGE is a 2-character ID in Base64
			for (var i = 0; i < bges.length; i += 2) {
				var bge = base64.toDecimal(bges.substring(i, i + 2)) + 10000;
				$("#enemy-battleground_" + bge).prop('checked', true);
			}
		}

		var mapBges = urlHelper.paramValue("mapBges");
		if (mapBges) {
			setSelectedMapBattlegrounds(mapBges);
		}

		$("#battleground").change();

		$('#sims').val(urlHelper.paramValue('sims') || 10000);

		if (urlHelper.paramDefined("debug")) $('#debug').click();
		if (urlHelper.paramDefined("mass_debug")) $('#mass_debug').click();
		if (urlHelper.paramDefined("loss_debug")) $('#loss_debug').click();
		if (urlHelper.paramDefined("win_debug")) $('#win_debug').click();
		if (urlHelper.paramDefined("play_debug")) $('#play_debug').click();

		document.title = "SimSpellstone " + text_version + " - The Spellstone Simulator that runs from your browser!";

		if (urlHelper.paramDefined('autostart') && !urlHelper.paramDefined("latestCards")) {
			simController.startsim();
		} else if (urlHelper.paramDefined('unit_tests')) {
			var body = document.getElementsByTagName("body")[0];
			var script = document.createElement("script");
			script.src = "scripts/unit_tests.js";
			body.appendChild(script);
			script.onload = function () {
				var script = document.createElement("script");
				script.src = "scripts/unit_test_runner.js";
				body.appendChild(script);
			};
		}

		if (document.getElementById("missionDeckDialog")) {
			deckPopupDialog = $("#missionDeckDialog").dialog({
				autoOpen: false,
				minWidth: 500,
				minHeight: 20,
				modal: true,
				resizable: false,
				draggable: false,
				buttons: {
					Close: function () {
						deckPopupDialog.dialog("close");
					}
				},
				open: function (event, ui) { $(".ui-dialog-titlebar-close", ui.dialog | ui).hide(); }
			});
		}
	}

    $(function () {

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
        }

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
                newDeck = loadDeck.raid(selectedRaid, raidLevel.val());
                if (RAIDS[selectedRaid].type === "Dungeon") {
                    raidLevel.attr("max", 150);
                } else {
                    raidLevel.attr("max", 40);
                }
            } else {
                newDeck = base64.decodeHash('');
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
                newDeck = loadDeck.mission(missionID, missionLevel);
            } else {
                newDeck = base64.decodeHash('');
            }
            deckChanged("defend_deck", newDeck, 'cpu');
        });

        $('#config-map-bge').click(showMapBGEs);

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

        if (urlHelper.paramDefined("latestCards")) {
            var callback = null;
            if (urlHelper.paramDefined("autostart")) {
                callback = function () {
                    simController.startsim();
                };
            }
            updateGameData(callback);
        } else {
            loadCardCache();
        }

        processQueryString();
    });
});