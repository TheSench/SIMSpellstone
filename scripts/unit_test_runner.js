function createResultsTable() {
    if (!document.getElementById("results_table")) {
        document.getElementsByTagName("body")[0].innerHTML += '<br /><div id="results_table"></div>';
    }
}

var unitTestResults = [];
var numPassed = 0;
var drawResults;

function runUnitTests() {
    document.getElementById("results_table").innerHTML = '';
    var resultType = _GET("unit_tests");
    drawResults = (resultType ? drawResultsAll : drawResultsFailed);
    unitTestResults = [];
    numPassed = 0;
    nextUnitTest();
}


function nextUnitTest(testNumber) {
    if (testNumber != undefined) {
        var test = UNIT_TESTS[testNumber];
        var winPercent = (wins / games);
        var lossPercent = (losses / games);
        var drawPercent = (draws / games);
        
        var passed = true;
        if (test.wins != undefined) passed &= compareResults(test.wins, winPercent);
        if (test.losses != undefined) passed &= compareResults(test.losses, lossPercent);
        if (test.draws != undefined) passed &= compareResults(test.draws, drawPercent);

        if (passed) numPassed++

        unitTestResults.push({
            wins: winPercent,
            losses: lossPercent,
            draws: drawPercent,
            passed: passed
        });
        testNumber++;
    } else {
        testNumber = 0;
    }

    clearFields();
    if (testNumber < UNIT_TESTS.length) {
        var test = UNIT_TESTS[testNumber];
        setupTest(test);
        var tblDiv = document.getElementById("remaining");
        tblDiv.style.display = "block";
        tblDiv.innerHTML = unitTestsStatus(testNumber);

        end_sims_callback = function () {
            nextUnitTest(testNumber);
        }
        startsim();
    } else {
        drawResults();
        clearFields();
        end_sims_callback = undefined;
    }
}

var tolerance = 0.01;
function compareResults(expected, actual) {
    if (expected == 0 || expected == 1) {
        return expected = actual;
    } else {
        return Math.abs(expected - actual) > tolerance;
    }
}

function unitTestsStatus(testNumber) {
    var currentTest = UNIT_TESTS[testNumber];
    var battlesRemaining = (UNIT_TESTS.length - testNumber);
    var output = battlesRemaining + " battles remaining - (" + numPassed + "/" + testNumber + " passed) - current test: " + currentTest.name;

    return output;
}

function clearFields() {

    var c = document.getElementById('ui');
    if (!c) return 0;

    var d = document.getElementById('deck1');
    if (d) d.value = '';

    var d = document.getElementById('deck2');
    if (d) d.value = '';

    var d = document.getElementById('list1');
    if (d) d.value = '';

    var d = document.getElementById('list2');
    if (d) d.value = '';

    var d = document.getElementById('surge');
    if (d) d.checked = false;

    var d = document.getElementById('siege');
    if (d) d.checked = false;

    var d = document.getElementById('tower_level');
    if (d) d.value = 10;

    var d = document.getElementById('tower_type');
    if (d) d.value = 0;

    var d = document.getElementById('tournament');
    if (d) d.checked = false;

    var d = document.getElementById('ordered');
    if (d) d.checked = false;

    var d = document.getElementById('exactorder');
    if (d) d.checked = false;

    var d = document.getElementById('ordered2');
    if (d) d.checked = false;

    var d = document.getElementById('exactorder2');
    if (d) d.checked = false;

    var d = document.getElementById('mission');
    if (d) d.checked = false;

    var d = document.getElementById('raid');
    if (d) d.checked = false;

    var bgCheckBoxes = document.getElementsByName("battleground");
    for (var i = 0; i < bgCheckBoxes.length; i++) {
        bgCheckBoxes[i].checked = false;
    }

    var d = document.getElementById('sims');
    if (d) d.value = 100;

    var d = document.getElementById('debug');
    if (d) d.checked = false;

    var d = document.getElementById('auto_mode');
    if (d) d.checked = false;

    var d = document.getElementById('mass_debug');
    if (d) d.checked = false;

    var d = document.getElementById('loss_debug');
    if (d) d.checked = false;

    var d = document.getElementById('win_debug');
    if (d) d.checked = false;

    var d = document.getElementById('user_controlled');
    if (d) d.checked = false;
}

function setupTest(test) {
    var c = document.getElementById('ui');
    if (!c) return 0;

    var d = document.getElementById('deck');
    if (d) d.value = test.deck1;

    var d = document.getElementById('deck2');
    if (d) d.value = test.deck2;

    var d = document.getElementById('surge');
    if (d) d.checked = test.surge | false;

    var d = document.getElementById('siege');
    if (d) d.checked = test.siege | false;

    var d = document.getElementById('tower_level');
    if (d) d.value = test.tower_level | 10;

    var d = document.getElementById('tower_type');
    if (d) d.value = test.tower_type | 0;

    var d = document.getElementById('tournament');
    if (d) d.checked = test.tournament | false;

    var d = document.getElementById('ordered');
    if (d) d.checked = test.ordered | false;

    var d = document.getElementById('exactorder');
    if (d) d.checked = test.exactorder | false;

    var d = document.getElementById('ordered2');
    if (d) d.checked = test.ordered2 | false;

    var d = document.getElementById('exactorder2');
    if (d) d.checked = test.exactorder2 | false;

    var d = document.getElementById('mission');
    if (d) d.value = test.mission | '';

    var d = document.getElementById('raid');
    if (d) d.checked = test.raid | false;

    var bgCheckBoxes = document.getElementsByName("battleground");
    if (test.battlegrounds) for (var i = 0; i < test.battlegrounds.length; i++) {
        var battleground = test.battlegrounds[i];
        bgCheckBoxes[battleground].checked = true;
    }

    var d = document.getElementById('sims');
    if (d) d.value = test.sims | 100;
}

function drawResultsAll() {
    var tblDiv = document.getElementById("results_table");
    tblDiv.innerHTML = '';
    var overall = document.createElement("span");
    overall.innerHTML = numPassed + "/" + UNIT_TESTS.length + " Tests Passed";
    overall.style.fontWeight = "bold";
    tblDiv.appendChild(overall);
    var table = document.createElement('table');
    table.cellSpacing = 0;
    table.cellPadding = 5;
    table.style.border = "1px solid #000000";
    var header = document.createElement("tr");
    header.classList.add("header");
    table.appendChild(header);
    var cell = document.createElement("th");
    cell.innerHTML = 'Test #';
    header.appendChild(cell);
    var cell = document.createElement("th");
    cell.innerHTML = 'Name';
    header.appendChild(cell);
    var cell = document.createElement("th");
    cell.innerHTML = 'Wins';
    header.appendChild(cell);
    var cell = document.createElement("th");
    cell.innerHTML = 'Losses';
    header.appendChild(cell);
    var cell = document.createElement("th");
    cell.innerHTML = 'Draws';
    header.appendChild(cell);
    var cell = document.createElement("th");
    cell.innerHTML = 'Passed?';
    header.appendChild(cell);

    for (var i = 0; i < unitTestResults.length; i++) {
        var test = UNIT_TESTS[i];
        var results = unitTestResults[i];
        var row = document.createElement("tr");
        row.classList.add("alternating");
        var cell = document.createElement("th");
        cell.innerHTML = i;
        row.appendChild(cell);
        var cell = document.createElement("th");
        cell.innerHTML = test.name;
        row.appendChild(cell);

        var cell = createResultCell(results.wins, test.wins);
        row.appendChild(cell);
        var cell = createResultCell(results.losses, test.losses);
        row.appendChild(cell);
        var cell = createResultCell(results.draws, test.draws);
        row.appendChild(cell);

        var cell = document.createElement("th");
        cell.innerHTML = (results.passed ? "Yes" : "No");
        row.appendChild(cell);

        table.appendChild(row);
    }

    tblDiv.style.width = document.getElementsByTagName("body")[0].offsetWidth + 'px';
    tblDiv.appendChild(table);
    tblDiv.appendChild(document.createElement('br'));
    document.getElementById("remaining").style.display = "none";
    scroll_to_end();
}

function drawResultsFailed() {
    var tblDiv = document.getElementById("results_table");
    tblDiv.innerHTML = '';
    var overall = document.createElement("span");
    overall.innerHTML = numPassed + "/" + UNIT_TESTS.length + " Tests Passed";
    overall.style.fontWeight = "bold";
    tblDiv.appendChild(overall);
    if (numPassed < UNIT_TESTS.length) {
        var table = document.createElement('table');
        table.cellSpacing = 0;
        table.cellPadding = 5;
        table.style.border = "1px solid #000000";
        var header = document.createElement("tr");
        header.classList.add("header");
        table.appendChild(header);
        var cell = document.createElement("th");
        cell.innerHTML = 'Test #';
        header.appendChild(cell);
        var cell = document.createElement("th");
        cell.innerHTML = 'Name';
        header.appendChild(cell);
        var cell = document.createElement("th");
        cell.innerHTML = 'Wins';
        header.appendChild(cell);
        var cell = document.createElement("th");
        cell.innerHTML = 'Losses';
        header.appendChild(cell);
        var cell = document.createElement("th");
        cell.innerHTML = 'Draws';
        header.appendChild(cell);

        for (var i = 0; i < unitTestResults.length; i++) {
            var test = UNIT_TESTS[i];
            var results = unitTestResults[i];
            if (!results.passed) {
                var row = document.createElement("tr");
                row.classList.add("alternating");
                var cell = document.createElement("th");
                cell.innerHTML = i;
                row.appendChild(cell);
                var cell = document.createElement("th");
                cell.innerHTML = test.name;
                row.appendChild(cell);

                var cell = createResultCell(results.wins, test.wins);
                row.appendChild(cell);
                var cell = createResultCell(results.losses, test.losses);
                row.appendChild(cell);
                var cell = createResultCell(results.draws, test.draws);
                row.appendChild(cell);

                table.appendChild(row);
            }
        }

        tblDiv.style.width = document.getElementsByTagName("body")[0].offsetWidth + 'px';
        tblDiv.appendChild(table);
    }
    tblDiv.appendChild(document.createElement('br'));
    document.getElementById("remaining").style.display = "none";
    scroll_to_end();
}

function createResultCell(actual, expected) {
    var cell = document.createElement("td");
    cell.innerHTML = (actual * 100).toFixed() + "%";
    return cell;
}

(function () {
    createResultsTable();
    runUnitTests();
})();