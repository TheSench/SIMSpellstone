define('config', [], function() {
   return {
      pvpAI: false
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
var getbattleground = '';
var enemybges = '';
var selfbges = '';
var mapbges = '';
var getsiege = 0;
var tower_level = 0;
var tower_type = 0;
var closeDiv = false;
var wins = 0;
var losses = 0;
var draws = 0;
var games = 0;
var points = 0;
var sims_left = 0;
var current_timeout;
var surge = false;
var battleground = [];
var total_turns = 0;
var choice = undefined;
var tournament = false;