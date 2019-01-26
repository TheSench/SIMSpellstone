// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

var cardCache = {
    "202": {
		"card_type": "1",
		"health": 8,
		"id": "202",
		"maxLevel": 1,
		"name": "Elaria Captain",
		"skill": [],
		"sub_type": [],
		"type": "3",
		"upgrades": {}
	}
};
var nextID = 1000;
var testUnits = {};

Cypress.Commands.add("TestUnit", (stats, skills) => {
    var unit = {
        "attack" : stats.attack,
        "health": stats.health,
        "cost": stats.cost,
        "skill": (skills || []),
        "sub_type": [],
        "type": "0",
        "upgrades": {},
        "id": "",
        "name": "Test Unit",
        "maxLevel": 1,
        "card_type": "2"
    };
    var key = JSON.stringify(unit);
    var unitID = testUnits[key];
    if (!unitID) {
        unitID = nextID++;
        unit.id = unitID;
        cardCache[unitID] = unit;
    }
    return unitID;
});
/*
it('test injecting CARDS', () => {
    cy.window().then(win => {
        console.log(win.CARDS);
    });
});
*/