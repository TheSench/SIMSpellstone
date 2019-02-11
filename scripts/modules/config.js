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
var closeDiv = false;
var current_timeout;
var battleground = [];