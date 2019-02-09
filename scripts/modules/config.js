define('config', [], function() {
   return {
      pvpAI: false
   };
});

define('matchStats', [], function() {
   return {
      matchesPlayed: 0,
      matchesWon: 0,
      matchesLost: 0,
      matchesDrawn: 0,
      totalTurns: 0,
      totalPoints: 0
   };
});

// Initialize global variables
var battle_history = '';
var mass_debug = false;
var loss_debug = false;
var win_debug = false;
var play_debug = false;
var getdeck = '';
var getdeck2 = '';
var getordered = false;
var getordered2 = false;
var getexactorder = false;
var getexactorder2 = false;
var getmission = 0;
var missionlevel = 0;
var getraid = false;
var raidlevel = 0;
var getsiege = 0;
var tower_level = 0;
var tower_type = 0;
var closeDiv = false;
var sims_left = 0;
var current_timeout;
var surge = false;
var battleground = [];
var choice = undefined;
var tournament = false;