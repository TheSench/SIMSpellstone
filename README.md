# SIMSpellstone
This is a conversion of SIMTyrant (originally developed by Kongregate user Moraku) to work for the similar Synapticon game "Spellstone".

Ce fork permet de simuler un grand nombre de combats pour optimiser son deck.

Le mode principal est le mode "Remplacement d'une carte du deck" (le mode "Ordonancement du deck" ne donnant pas grand chose). Pour l'utiliser il faut se créer un inventaire en mettant le hashcode dans le champ du même nom.
L'optimisation consistera à tenter de remplacer chaque carte du deck par une carte de l'inventaire. Le meilleur remplacement est proposé à la fin. Il vaut mieux éviter d'avoir un gros inventaire ou ça va prendre longtemps de tester toutes les combinaisons (15x le nombre de cartes de l'inventaire) donc éviter d'y mettre des cartes qu'on sait nulles.
