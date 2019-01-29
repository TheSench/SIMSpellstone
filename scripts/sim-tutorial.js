$(document).ready(function () {

    var tutorialParts = getTutorialScript();

    var overlayHtml = $("<div></div>");
    $(document.body).append(overlayHtml);
    overlayHtml.load("templates/tutorial-overlay.html", null, function () {
        overlayHtml.replaceWith(function () {
            return $(this).contents();
        });
        $("#tutorial-show").prop("checked", storageAPI.shouldShowTutorial).change(function (event) {
            storageAPI.setShowTutorial(this.checked);
        });
        $("#help").click(showTutorial);
        $("#tutorial-close, #tutorial-skip").click(closeTutorial);
        $("#tutorial-next").click(nextTutorial);
        $("#tutorial-prev").click(previousTutorial);
        if (typeof delayTutorial === "undefined") {
            checkTutorial();
        }
    });

    function checkTutorial() {
        if (storageAPI.shouldShowTutorial) {
            showTutorial();
        } else {
            closeTutorial();
        }
    }

    function showTutorial() {
        tutorialIndex = 0;
        setTutorial();
        var tutorial = $("#tutorial").show();
    }


    var tutorialIndex = 0;
    function nextTutorial() {
        tutorialIndex++;
        setTutorial();
    }

    function previousTutorial() {
        tutorialIndex--;
        setTutorial();
    }

    function closeTutorial() {
        $("#tutorial").hide();
        if ($("#tutorial-permahide").is(":checked")) {
            storageAPI.hideTutorial();
        }
    }

    var uiTimer;
    function setTutorial() {
        clearTimeout(uiTimer);
        var tutorialPart = tutorialParts[tutorialIndex];

        var actions = tutorialPart.actions;
        if (actions) {
            for (var i = 0; i < actions.length; i++) {
                actions[i]();
            }
        }

        var msg = tutorialPart.msg;

        var uiFocus = tutorialPart.ui;
        if (uiFocus) {
            var target = $(uiFocus);
            if (tutorialPart.dialog) {
                target = target.parent();
            }
            showUI(target);
            if (actions) {
                uiTimer = setTimeout(showUI, 500, target);
            }
            if (msg.indexOf("{0}" >= 0)) {
                msg = msg.replace(/\{0\}/g, target.text());
            }
        } else {
            $(".overlay-fog").width(0).height(0);
        }

        $("#tutorialMessage").text(msg);

        if (tutorialIndex < tutorialParts.length - 1) {
            $("#tutorial-next").show();
            $("#tutorial-close").hide();
        } else {
            $("#tutorial-next").hide();
            $("#tutorial-close").show();
        }

        if (tutorialIndex > 0) {
            $("#tutorial-prev").removeClass("disabled");
        } else {
            $("#tutorial-prev").addClass("disabled");
        }
    }

    function showUI(target) {
        var position = target.offset();
        $(".overlay-fog").css({ top: (position.top - 2) + 'px', left: (position.left - 2) + 'px' }).width((target.outerWidth() + 4) + 'px').height((target.outerHeight() + 4) + 'px');
    }

    window.showTutorial = showTutorial;
    window.checkTutorial = checkTutorial;
});