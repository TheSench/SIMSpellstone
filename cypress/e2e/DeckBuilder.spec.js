describe('Initialization', function () {
    describe('when the page loads', function() {
        it('deck contains Elaria Captain and 15 blank cards', function () {
            cy.visit('http://localhost:8080/DeckBuilder.html');
            cy.get('#deck').then(function (deck) {
                cy.wrap(deck).contains('Elaria Captain');
                cy.wrap(deck).find('.card.blank').then(function(cards) {
                    expect(cards.length).to.equal(15);
                });
            });
        });
    });
});