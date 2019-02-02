const baseUrl = 'http://localhost/GHSS/Titans.html';

function testDeck(description, deck1, deck2, expectedWinrate) {
    it(`${description} (${deck1} vs ${deck2}) should result in winrate of ${expectedWinrate}%`, function () {
        cy.visit(baseUrl + `?deck1=${deck1}&deck2=${deck2}&sims=1000&autostart`);
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

describe('Deck Tests', function() {
    testDeck('(1/1/1) vs (1/1/1) ', 'QpLQA4DowA', 'QpLQA4DowA', 100);

    // wins if 1/1/1 is dropped first
    testDeck('(1/3/1) vs (1/1/1 and 1/2/0) ', 'QpLQAIjowA', 'QpLQA4DowAgCJoB', 50);

    testDeck('(1/3/1 armor 1) vs (1/6/0) ', 'QpLQAIFMQB', 'QpLQAQcHQB', 100);
    testDeck('(1/3/1 bolt 1) vs (1/3/1 armor 1) ', 'QpLQAoKOoB', 'QpLQAIFMQB', 100);

    // TODO: Rune test
    //testDeck('(1/6/1 empower 2+3) vs (1/3/1 armor 1) ', 'QpLQAphWSB', 'QpLQAIFMQB', 100);
});