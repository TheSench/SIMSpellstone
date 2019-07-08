const baseUrl = "http://localhost:8080/Titans.html";

function crashTest(deck1, deck2, bges) {
  it(`(${deck1} vs ${deck2}) should run without error`, function() {
    cy.visit(
      baseUrl +
        `?deck1=${deck1}&deck2=${deck2}&sims=${100}&autostart&bges=${bges}`
    );
    cy.get("#simulationStatus").contains("Simulations complete");
  });
}

describe("Regression Tests", function() {
  describe("Doesn't crash", function() {
    crashTest(
      "gmQAAB8FlCB8FlCB8FlCgDPpCKTlpCsc!BFsXgwHsXgwHsXgwHAYxDCAYxDCAYxDCsTxnCWe5sC9ZhhC",
      "gmQAAB8FlCB8FlCB8FlCgDPpCKTlpCsc!BFsXgwHsXgwHsXgwHAYxDCAYxDCAYxDCsTxnCWe5sC9ZhhC",
      "CCDC"
    );
    crashTest(
      "gmQAA9ZhhCB8FlCqElBF0jaBF",
      "QYYBAEDbBFaimhCVhyAFXe5sCSUlBF",
      "CCDC"
    );
    crashTest(
      "gn5AAQjiqCQjiqCQjiqCQjiqCQjiqCQjiqCQjiqCQjiqCQjiqCQjiqCQjiqCQjiqCQjiqCQjiqCQjiqC",
      "gn5AAQjiqCQjiqCQjiqCQjiqCQjiqCQjiqCQjiqCQjiqCQjiqCQjiqCQjiqCQjiqCQjiqCQjiqCQjiqC",
      "4B5B"
    );
  });
});
