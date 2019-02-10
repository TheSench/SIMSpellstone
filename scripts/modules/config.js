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
var closeDiv = false;
var sims_left = 0;
var current_timeout;
var battleground = [];
var tournament = false;