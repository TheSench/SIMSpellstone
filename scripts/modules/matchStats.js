define('matchStats', [], function () {
   return {
      matchesPlayed: 0,
      matchesWon: 0,
      matchesLost: 0,
      matchesDrawn: 0,
      totalTurns: 0,
      totalPoints: 0,
      processMatch: function processMatch(simulator, result) {
         // Increment wins/losses/games
         if (result === 'draw') {
            this.matchesDrawn++;
         } else if (result) {
            this.matchesWon++;
         } else {
            this.matchesLost++;
         }
         this.totalPoints += simulator.calculatePoints();
         this.matchesPlayed++;

         // Increment total turn count
         this.totalTurns += simulator.simulation_turns;
      }
   };
});