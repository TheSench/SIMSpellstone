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
    crashTest(
      "QpLQA4pOoB",
      "QpLQA4pOoB",
      "yB3B"
    );
    crashTest(
      "QXvAAAqQSBgq7kCWmxmCYlxmCAvSqBgopjCqSvpCQi5pCgBfyIAsZZGY0wgCwLhAFQvouHQTcAFYarhC",
      "&mission=5803",
      "yB3B"
    );
    crashTest(
      "gmQAAw5aSBw5aSBIWQnCYLtTBApvDCoTxgCYosoCAM5lCAVpCC4D0lCQBYkCQOsDCIGnDCANimCo3NoC",
      "&mission=1509",
      "wBxB"
    );
    crashTest(
      "ov!AA9ZhhCAqrhCxMvRGwMvRG8b!oH6w8oHKozkHJozkHxhnUGxhnUGm52oCAM5lCAM5lCuG0lC36aSB",
      "&mission=1507",
      "sB2B"
    );
    crashTest(
      "QXvAAwkoSB4qdjCYhLSBw5aSBAKlSBw8XmCYlxmCoZqiCofgmCgt2mCw9AnCAzijCoFcTBQTjrBYborB",
      "&mission=5468",
      "qByB"
    );
    crashTest(
      "",
      "&mission=5803",
      ""
    );
  });
});
