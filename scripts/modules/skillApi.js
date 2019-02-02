define('skillApi', function () {

    var api = {
        setSkill: setSkill,
        copySkill: copySkill,
        copySkills: copySkills
    };

    function setSkill(new_card, skill) {
        // These skills could have multiple instances
        var skillID = skill.id;
        var skillType = SKILL_DATA[skillID].type;
        switch (skillType) {
            case 'toggle':
                new_card[skillID] = true;
                return;
    
            case 'passive':
                new_card[skill.id] = (new_card[skill.id] | 0) + skill.x;
                break;
    
            case 'flurry':
                new_card[skill.id] = skill;
                break;
    
            case 'onDeath':
                new_card.onDeathSkills.push(skill);
                break;
    
            case 'earlyActivation':
                new_card.earlyActivationSkills.push(skill);
                break;
    
            case 'activation':
            default:
                new_card.skill.push(skill);
                break;
        }
    }

    function copySkill(original_skill) {
        var new_skill = {};
        new_skill.id = original_skill.id;
        new_skill.x = original_skill.x;
        new_skill.mult = original_skill.mult;
        new_skill.on_delay_mult = original_skill.on_delay_mult;
        new_skill.all = original_skill.all;
        new_skill.y = original_skill.y;
        new_skill.z = original_skill.z;
        new_skill.c = original_skill.c;
        new_skill.s = original_skill.s;
        return new_skill;
    }

    function copySkills(new_card, original_skills, mult) {
        new_card.skill = [];
        new_card.earlyActivationSkills = [];
        new_card.onDeathSkills = [];
        var skillTimers = [];
        var reusable = true;
        for (var key in original_skills) {
            var newSkill = original_skills[key];
            if (newSkill.c) {   // If skill has a timer, we need to clone it
                var copiedSkill = copySkill(newSkill);
                setSkill(new_card, copiedSkill);
                skillTimers.push(copiedSkill);
                reusable = false;
            } else if (mult) {
                var copiedSkill = copySkill(newSkill);
                //copySkill.x = ~~(copySkill.x * mult);   // Floor the results
                copiedSkill.x = Math.ceil(copiedSkill.x * mult);
                setSkill(new_card, copiedSkill);
            } else {            // If skill has no timer, we can use the same instance
                setSkill(new_card, newSkill);
            }
        }
        new_card.reusableSkills = reusable;
        new_card.skillTimers = skillTimers;
    }

    return api;
});