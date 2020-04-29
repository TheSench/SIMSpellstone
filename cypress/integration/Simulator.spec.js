const baseUrl = 'http://localhost:8080/Titans.html';

function testDeck(description, deck1, deck2, expectedWinrate, bges) {
    var sims = (expectedWinrate == 100 || expectedWinrate == 0) ? 50 : 1000;

    it(`${description} (${deck1} vs ${deck2}) should result in winrate of ${expectedWinrate}%`, function () {
        cy.visit(baseUrl + `?deck1=${deck1}&deck2=${deck2}&sims=${sims}&autostart&bges=${bges}`);
        cy.get('#simulationStatus')
            .contains('Simulations complete')
            .then(function() {
                cy.get('#winrate').then(function (winrate) {
                    expect(parseInt(winrate.text())).to.be.approximately(expectedWinrate, 5);
                });
            });
    });
}

describe('Initialization', function () {
    describe('when the page loads', function() {
        it('simulation can be run', function () {
            cy.visit(baseUrl + '?sims=1000');
            cy.get('#btn_simulate').click();
            cy.get('#simulationStatus').contains('Simulations complete');
        });
    });
});

describe('Debug Tests', function() {
    it('doesn\'t crash', function () {
        cy.visit(baseUrl + '?deck1=QpLQAoAlrBoAlrBoAlrBoAlrBoAlrB&deck2=QpLQAoAlrBoAlrBoAlrBoAlrBoAlrB&debug&autostart');
        cy.get('#show-turns').should('have.value', 'Show One');
    });
});

describe('Deck Tests', function() {
    testDeck('(1/1/1) vs (1/1/1) ', 'QpLQA4DowA', 'QpLQA4DowA', 100);

    // wins if 1/1/1 is dropped first
    testDeck('(1/3/1) vs (1/1/1 and 1/2/0) ', 'QpLQAIjowA', 'QpLQA4DowAgCJoB', 50);

    testDeck('(1/3/1 armor 1) vs (1/6/0) ', 'QpLQAIFMQB', 'QpLQAQcHQB', 100);
    testDeck('(1/3/1 bolt 1) vs (1/3/1 armor 1) ', 'QpLQAoKOoB', 'QpLQAIFMQB', 100);
    testDeck('(1/4/1 weaken 1) vs (1/8/0) ', 'QpLQAY7soB', 'QpLQAA6IQB', 100);
    testDeck('(3/6/1 hex 2,pierce 2) vs (3/5/0) ', 'QpLQAIjRpB', 'QpLQAIPLoB', 100);
    testDeck('(3/6/1 hex 2,pierce 2) vs (3/9/2 poison 3) ', 'QpLQAIjRpB', 'QpLQAwMXoB', 100);
    
    
    // TODO: Rune test
    testDeck('(5/4/0 poison 3+2, pierce 6, invis 2) vs (3/10/2 bolt 2, counter 2) ', 'QpLQAEKiqB', 'QpLQAQHVQB', 100);

    describe('Bash', function() {
        testDeck('Increases attack', 'QpLQAQDjAC', 'QpLQAQtroB', 100, 'DC');
        testDeck('Bash triggers each turn', 'QpLQA4SjAC', 'QpLQA4UcoB', 100, 'DC');
        // TODO: Dualstrike test
    });
});

describe('BGE Regression', function() {
    // Was healing by NaN, killing all units played
    testDeck('Age of Dragons (Doesn\'t heal by NaN)', 'QpLQAYCrCC', 'QpLQA', 100);
});