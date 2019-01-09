// Convert skills to 1.0 version
for(var skillID in SKILL_DATA) {
	var skillInfo = SKILL_DATA[skillID];
	if(skillID === 'flurry') {
		skillInfo.type = 'flurry';
	} else if(['turnStart', 'onAttack', 'onDamaged', 'turnEnd'].indexOf(skillInfo.type) >= 0) {
		skillInfo.type = 'passive';
	}
}
// Create REVERSE_FUSIONS
var REVERSE_FUSIONS = {};
for(var id in FUSIONS) {
	var fusion = FUSIONS[id];
	REVERSE_FUSIONS[fusion] = id;
}