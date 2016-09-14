var BattleDisplay = (function () {
    var module = {};
    
    module.test = function () {
        let battleInfo = '{"host_is_attacker":true,"battle_id":1473863693759,"host_id":"1204400001","kv_store":{"play_id":"FD504BBD-71D3-449A-9372-ABA9A0837A9B"},"card_map":{"1":{"unit_id":"21325","level":"5","runes":{"1":{"item_id":"5111","slot":"1","skill_index":0}}},"2":{"unit_id":"21030","level":"5","runes":{"1":{"item_id":"5062","slot":"1","skill_index":0}}},"3":{"unit_id":"21028","level":"5","runes":{"1":{"item_id":"5071","slot":"1","skill_index":0}}},"4":{"unit_id":"21331","level":"5","runes":{"1":{"item_id":"5111","slot":"1","skill_index":2}}},"5":{"unit_id":"21028","level":"5","runes":{"1":{"item_id":"5071","slot":"1","skill_index":0}}},"6":{"unit_id":"21028","level":"5","runes":{"1":{"item_id":"5071","slot":"1","skill_index":0}}},"7":{"unit_id":"22027","level":"5","runes":{"1":{"item_id":"5011","slot":"1"}}},"8":{"unit_id":"2038","level":"6","runes":{"1":{"item_id":"5012","slot":"1"}}},"9":{"unit_id":"22030","level":"5","runes":{"1":{"item_id":"5184","slot":"1","skill_index":1}}},"10":{"unit_id":"22048","level":"5","runes":{"1":{"item_id":"5161","slot":"1","skill_index":0}}},"11":{"unit_id":"21031","level":"5","runes":{"1":{"item_id":"5111","slot":"1","skill_index":1}}},"12":{"unit_id":"21317","level":"4","runes":[]},"13":{"unit_id":"21025","level":"5","runes":{"1":{"item_id":"5152","slot":"1","skill_index":1}}},"14":{"unit_id":"11342","level":"6","runes":{"1":{"item_id":"5101","slot":"1","skill_index":0}}},"15":{"unit_id":"21325","level":"5","runes":{"1":{"item_id":"5111","slot":"1","skill_index":0}}},"101":{"unit_id":"22048","level":"5","runes":{"1":{"item_id":"5161","slot":"1","skill_index":0}}},"102":{"unit_id":"27060","level":"6","runes":{"1":{"item_id":"5072","slot":"1","skill_index":0}}},"103":{"unit_id":"25026","level":"6","runes":{"1":{"item_id":"5152","slot":"1","skill_index":0}}},"104":{"unit_id":"25056","level":"6","runes":{"1":{"item_id":"5072","slot":"1","skill_index":0}}},"105":{"unit_id":"25064","level":"6","runes":{"1":{"item_id":"5062","slot":"1","skill_index":0}}},"106":{"unit_id":"2038","level":"6","runes":{"1":{"item_id":"5184","slot":"1","skill_index":1}}},"107":{"unit_id":"26026","level":"6","runes":{"1":{"item_id":"5162","slot":"1","skill_index":1}}},"108":{"unit_id":"21028","level":"5","runes":{"1":{"item_id":"5071","slot":"1","skill_index":0}}},"109":{"unit_id":"27064","level":"6","runes":{"1":{"item_id":"5011","slot":"1"}}},"110":{"unit_id":"21342","level":"6","runes":{"1":{"item_id":"5011","slot":"1"}}},"111":{"unit_id":"11642","level":"6","runes":{"1":{"item_id":"5101","slot":"1","skill_index":2}}},"112":{"unit_id":"21327","level":"5","runes":{"1":{"item_id":"5101","slot":"1","skill_index":1}}},"113":{"unit_id":"16045","level":"6","runes":{"1":{"item_id":"5112","slot":"1","skill_index":2}}},"114":{"unit_id":"2016","level":"7","runes":{"1":{"item_id":"5044","slot":"1","skill_index":2}}},"115":{"unit_id":"27037","level":"6","runes":{"1":{"item_id":"5184","slot":"1","skill_index":2}}}},"attack_commander":{"unit_index":"1","unit_id":"15","level":"6"},"attack_deck":{"1":{"unit_index":"42","unit_id":"21325","level":"5","runes":{"1":{"item_id":"5111","slot":"1","skill_index":0}}},"2":{"unit_index":"34","unit_id":"21030","level":"5","runes":{"1":{"item_id":"5062","slot":"1","skill_index":0}}},"3":{"unit_index":"23","unit_id":"21028","level":"5","runes":{"1":{"item_id":"5071","slot":"1","skill_index":0}}},"4":{"unit_index":"17","unit_id":"21331","level":"5","runes":{"1":{"item_id":"5111","slot":"1","skill_index":2}}},"5":{"unit_index":"52","unit_id":"21028","level":"5","runes":{"1":{"item_id":"5071","slot":"1","skill_index":0}}},"6":{"unit_index":"39","unit_id":"21028","level":"5","runes":{"1":{"item_id":"5071","slot":"1","skill_index":0}}},"7":{"unit_index":"11","unit_id":"22027","level":"5","runes":{"1":{"item_id":"5011","slot":"1"}}},"8":{"unit_index":"31","unit_id":"2038","level":"6","runes":{"1":{"item_id":"5012","slot":"1"}}},"9":{"unit_index":"3","unit_id":"22030","level":"5","runes":{"1":{"item_id":"5184","slot":"1","skill_index":1}}},"10":{"unit_index":"8","unit_id":"22048","level":"5","runes":{"1":{"item_id":"5161","slot":"1","skill_index":0}}},"11":{"unit_index":"9","unit_id":"21031","level":"5","runes":{"1":{"item_id":"5111","slot":"1","skill_index":1}}},"12":{"unit_index":"72","unit_id":"21317","level":"4","runes":[]},"13":{"unit_index":"6","unit_id":"21025","level":"5","runes":{"1":{"item_id":"5152","slot":"1","skill_index":1}}},"14":{"unit_index":"71","unit_id":"11342","level":"6","runes":{"1":{"item_id":"5101","slot":"1","skill_index":0}}},"15":{"unit_index":"2","unit_id":"21325","level":"5","runes":{"1":{"item_id":"5111","slot":"1","skill_index":0}}}},"defend_commander":{"unit_index":"33","unit_id":"15","level":"6"},"enemy_id":"868091001","turn":{"1":{"draws":[1,2,3],"plays":[{"card_uid":"1","status":[]}]},"2":{"draws":[101,102,103],"plays":[{"card_uid":102,"status":[]}],"actions":[{"card_uid":-2,"skill_id":"enfeeble","targets":["1"],"value":3,"target_values":[{"t":"1","x":3}],"status":[{"card_uid":1,"status_flag":"enfeeble","value":3,"status_string":null}]},{"card_uid":-2,"skill_id":"weaken","targets":["1"],"value":1,"target_values":[{"t":"1","x":1}],"status":[{"card_uid":1,"status_flag":"attack_boost","value":-1,"status_string":null}]}]},"3":{"begin":[{"card_uid":"1","status_flag":"enfeeble","value":0}],"draws":[4],"plays":[{"card_uid":"3","status":[]}],"actions":[{"card_uid":-1,"skill_id":"imbue","targets":["1"],"value":1,"target_values":[{"t":"1","x":1}],"status":[{"card_uid":1,"status_flag":"imbued_value","value":1,"status_string":"berserk"}]},{"card_uid":-1,"skill_id":"enfeeble","targets":[102],"value":3,"target_values":[{"t":102,"x":3}],"status":[{"card_uid":102,"status_flag":"enfeeble","value":3,"status_string":null}]},{"card_uid":1,"skill_id":"strike","targets":[102],"value":9,"target_values":[{"t":102,"x":9}],"status":[]},{"card_uid":1,"skill_id":0,"targets":[102],"value":5,"block":[],"status":[]},{"card_uid":1,"skill_id":"berserk","targets":[1],"value":1,"block":[],"status":[{"card_uid":1,"status_flag":"berserk","value":1,"status_string":null}]}],"end":[{"card_uid":"1","status_flag":"attack_boost","value":0}]},"4":{"begin":[{"card_uid":102,"status_flag":"enfeeble","value":0}],"draws":[104],"plays":[{"card_uid":103,"status":[]}],"actions":[{"card_uid":-2,"skill_id":"enfeeble","targets":["3"],"value":3,"target_values":[{"t":"3","x":3}],"status":[{"card_uid":3,"status_flag":"enfeeble","value":3,"status_string":null}]},{"card_uid":-2,"skill_id":"weaken","targets":["1","3"],"value":1,"target_values":[{"t":"1","x":1},{"t":"3","x":1}],"status":[{"card_uid":1,"status_flag":"attack_boost","value":-1,"status_string":null},{"card_uid":3,"status_flag":"attack_boost","value":-1,"status_string":null}]}]},"5":{"begin":[{"card_uid":"3","status_flag":"enfeeble","value":0},{"card_uid":"1","status_flag":"imbued_skill","value":0},{"card_uid":"1","status_flag":"imbued_value","value":0}],"draws":[5],"plays":[{"card_uid":"4","status":[]}],"actions":[{"card_uid":-1,"skill_id":"imbue","targets":["3"],"value":1,"target_values":[{"t":"3","x":1}],"status":[{"card_uid":3,"status_flag":"imbued_value","value":1,"status_string":"berserk"}]},{"card_uid":3,"skill_id":"rally","targets":["1"],"value":7,"target_values":[{"t":"1","x":7}],"status":[{"card_uid":1,"status_flag":"attack_boost","value":6,"status_string":null}]},{"card_uid":-1,"skill_id":"enfeeble","targets":[102],"value":3,"target_values":[{"t":102,"x":3}],"status":[{"card_uid":102,"status_flag":"enfeeble","value":3,"status_string":null}]},{"card_uid":-1,"skill_id":"weaken","targets":[102,103],"value":1,"target_values":[{"t":102,"x":1},{"t":103,"x":1}],"status":[{"card_uid":102,"status_flag":"attack_boost","value":-1,"status_string":null},{"card_uid":103,"status_flag":"attack_boost","value":-1,"status_string":null}]},{"card_uid":1,"skill_id":"strike","targets":[103],"value":6,"target_values":[{"t":103,"x":6}],"status":[]},{"card_uid":1,"skill_id":0,"targets":[102],"value":13,"block":[],"status":[]},{"card_uid":3,"skill_id":"jam","targets":[103],"value":1,"target_values":[{"t":103,"x":1}],"status":[{"card_uid":103,"status_flag":"jammed","value":1,"status_string":null}]},{"card_uid":3,"skill_id":0,"targets":[103],"value":1,"block":[],"status":[]},{"card_uid":3,"skill_id":"berserk","targets":[3],"value":1,"block":[],"status":[{"card_uid":3,"status_flag":"berserk","value":1,"status_string":null}]}],"defend_kill":[102],"end":[{"card_uid":"1","status_flag":"attack_boost","value":0},{"card_uid":"3","status_flag":"attack_boost","value":0}]},"6":{"draws":[105],"plays":[{"card_uid":104,"status":[]}],"actions":[{"card_uid":-2,"skill_id":"enfeeble","targets":["1"],"value":3,"target_values":[{"t":"1","x":3}],"status":[{"card_uid":1,"status_flag":"enfeeble","value":3,"status_string":null}]},{"card_uid":"4","skill_id":"evade","targets":[4],"value":1,"instant":1},{"card_uid":-2,"skill_id":"weaken","targets":["1","3","4"],"value":0,"target_values":[{"t":"1","x":1},{"t":"3","x":1},{"t":"4","x":0}],"status":[{"card_uid":1,"status_flag":"attack_boost","value":-1,"status_string":null},{"card_uid":3,"status_flag":"attack_boost","value":-1,"status_string":null},{"card_uid":4,"status_flag":"attack_boost","value":0,"status_string":null}]}],"end":[{"card_uid":103,"status_flag":"attack_boost","value":0}]},"7":{"begin":[{"card_uid":103,"status_flag":"jammed","value":0},{"card_uid":3,"status_flag":"1_cooldown","value":3},{"card_uid":"1","status_flag":"enfeeble","value":0},{"card_uid":"3","status_flag":"imbued_skill","value":0},{"card_uid":"3","status_flag":"imbued_value","value":0}],"draws":[6],"plays":[{"card_uid":"5","status":[]}],"actions":[{"card_uid":-1,"skill_id":"imbue","targets":["3"],"value":1,"target_values":[{"t":"3","x":1}],"status":[{"card_uid":3,"status_flag":"imbued_value","value":1,"status_string":"berserk"}]},{"card_uid":3,"skill_id":"rally","targets":["1"],"value":7,"target_values":[{"t":"1","x":7}],"status":[{"card_uid":1,"status_flag":"attack_boost","value":6,"status_string":null}]},{"card_uid":-1,"skill_id":"enfeeble","targets":[104],"value":3,"target_values":[{"t":104,"x":3}],"status":[{"card_uid":104,"status_flag":"enfeeble","value":3,"status_string":null}]},{"card_uid":-1,"skill_id":"weaken","targets":[103],"value":1,"target_values":[{"t":103,"x":1}],"status":[{"card_uid":103,"status_flag":"attack_boost","value":-1,"status_string":null}]},{"card_uid":1,"skill_id":"strike","targets":[103],"value":6,"target_values":[{"t":103,"x":6}],"status":[]},{"card_uid":1,"skill_id":0,"targets":[103],"value":10,"block":[],"status":[]},{"card_uid":3,"skill_id":0,"targets":[104],"value":5,"block":[],"status":[]},{"card_uid":3,"skill_id":"berserk","targets":[3],"value":1,"block":[],"status":[{"card_uid":3,"status_flag":"berserk","value":2,"status_string":null}]},{"card_uid":4,"skill_id":"strike","targets":[104],"value":7,"target_values":[{"t":104,"x":7}],"status":[]},{"card_uid":4,"skill_id":0,"targets":[-2],"value":4}],"defend_kill":[103],"end":[{"card_uid":"1","status_flag":"attack_boost","value":0},{"card_uid":"3","status_flag":"attack_boost","value":0},{"card_uid":"4","status_flag":"attack_boost","value":0}]},"8":{"begin":[{"card_uid":104,"status_flag":"enfeeble","value":0}],"draws":[106],"plays":[{"card_uid":105,"status":[]}],"actions":[{"card_uid":-2,"skill_id":"enfeeble","targets":["1"],"value":3,"target_values":[{"t":"1","x":3}],"status":[{"card_uid":1,"status_flag":"enfeeble","value":3,"status_string":null}]},{"card_uid":"4","skill_id":"evade","targets":[4],"value":1,"instant":1},{"card_uid":-2,"skill_id":"weaken","targets":["1","3","4","5"],"value":1,"target_values":[{"t":"1","x":1},{"t":"3","x":1},{"t":"4","x":0},{"t":"5","x":1}],"status":[{"card_uid":1,"status_flag":"attack_boost","value":-1,"status_string":null},{"card_uid":3,"status_flag":"attack_boost","value":-1,"status_string":null},{"card_uid":4,"status_flag":"attack_boost","value":0,"status_string":null},{"card_uid":5,"status_flag":"attack_boost","value":-1,"status_string":null}]}]},"9":{"begin":[{"card_uid":3,"status_flag":"1_cooldown","value":2},{"card_uid":"1","status_flag":"enfeeble","value":0},{"card_uid":"3","status_flag":"imbued_skill","value":0},{"card_uid":"3","status_flag":"imbued_value","value":0}],"draws":[7],"plays":[{"card_uid":"6","status":[]}],"actions":[{"card_uid":-1,"skill_id":"imbue","targets":["3"],"value":1,"target_values":[{"t":"3","x":1}],"status":[{"card_uid":3,"status_flag":"imbued_value","value":1,"status_string":"berserk"}]},{"card_uid":3,"skill_id":"rally","targets":["1"],"value":7,"target_values":[{"t":"1","x":7}],"status":[{"card_uid":1,"status_flag":"attack_boost","value":6,"status_string":null}]},{"card_uid":5,"skill_id":"rally","targets":["4"],"value":7,"target_values":[{"t":"4","x":7}],"status":[{"card_uid":4,"status_flag":"attack_boost","value":7,"status_string":null}]},{"card_uid":-1,"skill_id":"enfeeble","targets":[104],"value":3,"target_values":[{"t":104,"x":3}],"status":[{"card_uid":104,"status_flag":"enfeeble","value":3,"status_string":null}]},{"card_uid":-1,"skill_id":"weaken","targets":[104],"value":1,"target_values":[{"t":104,"x":1}],"status":[{"card_uid":104,"status_flag":"attack_boost","value":-1,"status_string":null}]},{"card_uid":1,"skill_id":"strike","targets":[104],"value":9,"target_values":[{"t":104,"x":9}],"status":[]},{"card_uid":1,"skill_id":0,"targets":[104],"value":13,"block":[],"status":[]},{"card_uid":3,"skill_id":0,"targets":[105],"value":0,"block":[{"card_uid":105,"skill":"armored","value":6}],"status":[]},{"card_uid":4,"skill_id":"strike","targets":[105],"value":4,"target_values":[{"t":105,"x":4}],"status":[]},{"card_uid":4,"skill_id":0,"targets":[-2],"value":11},{"card_uid":5,"skill_id":0,"targets":[-2],"value":1}],"defend_kill":[104],"end":[{"card_uid":"1","status_flag":"attack_boost","value":0},{"card_uid":"3","status_flag":"attack_boost","value":0},{"card_uid":"4","status_flag":"attack_boost","value":0},{"card_uid":"5","status_flag":"attack_boost","value":0}]},"10":{"draws":[107],"plays":[{"card_uid":107,"status":[]}],"actions":[{"card_uid":-2,"skill_id":"enfeeble","targets":["1"],"value":3,"target_values":[{"t":"1","x":3}],"status":[{"card_uid":1,"status_flag":"enfeeble","value":3,"status_string":null}]},{"card_uid":"4","skill_id":"evade","targets":[4],"value":1,"instant":1},{"card_uid":-2,"skill_id":"weaken","targets":["1","3","4","5","6"],"value":1,"target_values":[{"t":"1","x":1},{"t":"3","x":1},{"t":"4","x":0},{"t":"5","x":1},{"t":"6","x":1}],"status":[{"card_uid":1,"status_flag":"attack_boost","value":-1,"status_string":null},{"card_uid":3,"status_flag":"attack_boost","value":-1,"status_string":null},{"card_uid":4,"status_flag":"attack_boost","value":0,"status_string":null},{"card_uid":5,"status_flag":"attack_boost","value":-1,"status_string":null},{"card_uid":6,"status_flag":"attack_boost","value":-1,"status_string":null}]}]},"11":{"begin":[{"card_uid":3,"status_flag":"1_cooldown","value":1},{"card_uid":"1","status_flag":"enfeeble","value":0},{"card_uid":"3","status_flag":"imbued_skill","value":0},{"card_uid":"3","status_flag":"imbued_value","value":0}],"draws":[8],"plays":[{"card_uid":"8","status":[]}],"actions":[{"card_uid":-1,"skill_id":"imbue","targets":["6"],"value":1,"target_values":[{"t":"6","x":1}],"status":[{"card_uid":6,"status_flag":"imbued_value","value":1,"status_string":"berserk"}]},{"card_uid":3,"skill_id":"rally","targets":["4"],"value":7,"target_values":[{"t":"4","x":7}],"status":[{"card_uid":4,"status_flag":"attack_boost","value":7,"status_string":null}]},{"card_uid":5,"skill_id":"rally","targets":["4"],"value":7,"target_values":[{"t":"4","x":7}],"status":[{"card_uid":4,"status_flag":"attack_boost","value":14,"status_string":null}]},{"card_uid":6,"skill_id":"rally","targets":["1"],"value":7,"target_values":[{"t":"1","x":7}],"status":[{"card_uid":1,"status_flag":"attack_boost","value":6,"status_string":null}]},{"card_uid":-1,"skill_id":"enfeeble","targets":[105],"value":3,"target_values":[{"t":105,"x":3}],"status":[{"card_uid":105,"status_flag":"enfeeble","value":3,"status_string":null}]},{"card_uid":107,"skill_id":"evade","targets":[107],"value":1,"instant":1},{"card_uid":-1,"skill_id":"weaken","targets":[107],"value":0,"target_values":[{"t":107,"x":0}],"status":[{"card_uid":107,"status_flag":"attack_boost","value":0,"status_string":null}]},{"card_uid":1,"skill_id":"strike","targets":[105],"value":9,"target_values":[{"t":105,"x":9}],"status":[]},{"card_uid":1,"skill_id":0,"targets":[105],"value":7,"block":[{"card_uid":105,"skill":"armored","value":6}],"status":[]},{"card_uid":3,"skill_id":0,"targets":[107],"value":3,"block":[],"status":[]},{"card_uid":4,"skill_id":"strike","targets":[105],"value":7,"target_values":[{"t":105,"x":7}],"status":[]},{"card_uid":4,"skill_id":0,"targets":[-2],"value":18},{"card_uid":107,"skill_id":"evade","targets":[107],"value":1,"instant":1},{"card_uid":5,"skill_id":"jam","targets":[107],"value":0,"target_values":[{"t":107,"x":0}],"status":[{"card_uid":107,"status_flag":"jammed","value":0,"status_string":null}]},{"card_uid":5,"skill_id":0,"targets":[-2],"value":1},{"card_uid":6,"skill_id":"jam","targets":[107],"value":1,"target_values":[{"t":107,"x":1}],"status":[{"card_uid":107,"status_flag":"jammed","value":1,"status_string":null}]},{"card_uid":6,"skill_id":0,"targets":[-2],"value":1},{"card_uid":6,"skill_id":"berserk","targets":[6],"value":1,"block":[],"status":[{"card_uid":6,"status_flag":"berserk","value":1,"status_string":null}]}],"end":[{"card_uid":"1","status_flag":"attack_boost","value":0},{"card_uid":"3","status_flag":"attack_boost","value":0},{"card_uid":"4","status_flag":"attack_boost","value":0},{"card_uid":"5","status_flag":"attack_boost","value":0},{"card_uid":"6","status_flag":"attack_boost","value":0}]},"12":{"begin":[{"card_uid":105,"status_flag":"enfeeble","value":0}],"draws":[108],"plays":[{"card_uid":101,"status":[]}],"actions":[{"card_uid":"4","skill_id":"evade","targets":[4],"value":1,"instant":1},{"card_uid":-2,"skill_id":"enfeeble","targets":["4"],"value":0,"target_values":[{"t":"4","x":0}],"status":[{"card_uid":4,"status_flag":"enfeeble","value":0,"status_string":null}]},{"card_uid":-2,"skill_id":"weaken","targets":["1","3","4","5","6"],"value":1,"target_values":[{"t":"1","x":1},{"t":"3","x":1},{"t":"4","x":1},{"t":"5","x":1},{"t":"6","x":1}],"status":[{"card_uid":1,"status_flag":"attack_boost","value":-1,"status_string":null},{"card_uid":3,"status_flag":"attack_boost","value":-1,"status_string":null},{"card_uid":4,"status_flag":"attack_boost","value":-1,"status_string":null},{"card_uid":5,"status_flag":"attack_boost","value":-1,"status_string":null},{"card_uid":6,"status_flag":"attack_boost","value":-1,"status_string":null}]}],"end":[{"card_uid":107,"status_flag":"attack_boost","value":0}]},"13":{"begin":[{"card_uid":107,"status_flag":"jammed","value":0},{"card_uid":3,"status_flag":"1_cooldown","value":0},{"card_uid":6,"status_flag":"1_cooldown","value":3},{"card_uid":"4","status_flag":"enfeeble","value":0},{"card_uid":"6","status_flag":"imbued_skill","value":0},{"card_uid":"6","status_flag":"imbued_value","value":0}],"draws":[9],"plays":[{"card_uid":2,"status":[]}],"actions":[{"card_uid":-1,"skill_id":"imbue","targets":["4"],"value":1,"target_values":[{"t":"4","x":1}],"status":[{"card_uid":4,"status_flag":"imbued_value","value":1,"status_string":"berserk"}]},{"card_uid":3,"skill_id":"rally","targets":["1"],"value":7,"target_values":[{"t":"1","x":7}],"status":[{"card_uid":1,"status_flag":"attack_boost","value":6,"status_string":null}]},{"card_uid":5,"skill_id":"rally","targets":["5"],"value":7,"target_values":[{"t":"5","x":7}],"status":[{"card_uid":5,"status_flag":"attack_boost","value":6,"status_string":null}]},{"card_uid":6,"skill_id":"rally","targets":["4"],"value":7,"target_values":[{"t":"4","x":7}],"status":[{"card_uid":4,"status_flag":"attack_boost","value":6,"status_string":null}]},{"card_uid":-1,"skill_id":"enfeeble","targets":[105],"value":3,"target_values":[{"t":105,"x":3}],"status":[{"card_uid":105,"status_flag":"enfeeble","value":3,"status_string":null}]},{"card_uid":107,"skill_id":"evade","targets":[107],"value":1,"instant":1},{"card_uid":-1,"skill_id":"weaken","targets":[105,107,101],"value":1,"target_values":[{"t":105,"x":1},{"t":107,"x":0},{"t":101,"x":1}],"status":[{"card_uid":105,"status_flag":"attack_boost","value":-1,"status_string":null},{"card_uid":107,"status_flag":"attack_boost","value":0,"status_string":null},{"card_uid":101,"status_flag":"attack_boost","value":-1,"status_string":null}]},{"card_uid":107,"skill_id":"evade","targets":[107],"value":1,"instant":1},{"card_uid":1,"skill_id":"strike","targets":[107],"value":0,"target_values":[{"t":107,"x":0}],"status":[]},{"card_uid":1,"skill_id":0,"targets":[105],"value":7,"block":[{"card_uid":105,"skill":"armored","value":6}],"status":[]},{"card_uid":3,"skill_id":"jam","targets":[101],"value":1,"target_values":[{"t":101,"x":1}],"status":[{"card_uid":101,"status_flag":"jammed","value":1,"status_string":null}]},{"card_uid":3,"skill_id":0,"targets":[107],"value":3,"block":[],"status":[]},{"card_uid":4,"skill_id":"strike","targets":[101],"value":4,"target_values":[{"t":101,"x":4}],"status":[]},{"card_uid":4,"skill_id":0,"targets":[101],"value":10,"block":[],"status":[]},{"card_uid":4,"skill_id":"berserk","targets":[4],"value":1,"block":[],"status":[{"card_uid":4,"status_flag":"berserk","value":1,"status_string":null}]},{"card_uid":5,"skill_id":"jam","targets":[107],"value":1,"target_values":[{"t":107,"x":1}],"status":[{"card_uid":107,"status_flag":"jammed","value":1,"status_string":null}]},{"card_uid":5,"skill_id":0,"targets":[-2],"value":8},{"card_uid":6,"skill_id":0,"targets":[-2],"value":2}],"defend_kill":[105],"end":[{"card_uid":"1","status_flag":"attack_boost","value":0},{"card_uid":"3","status_flag":"attack_boost","value":0},{"card_uid":"4","status_flag":"attack_boost","value":0},{"card_uid":"5","status_flag":"attack_boost","value":0},{"card_uid":"6","status_flag":"attack_boost","value":0}]},"14":{"draws":[109],"plays":[{"card_uid":109,"status":[]}],"actions":[{"card_uid":-2,"skill_id":"enfeeble","targets":["1"],"value":3,"target_values":[{"t":"1","x":3}],"status":[{"card_uid":1,"status_flag":"enfeeble","value":3,"status_string":null}]},{"card_uid":"4","skill_id":"evade","targets":[4],"value":1,"instant":1},{"card_uid":-2,"skill_id":"weaken","targets":["1","3","4","5","6","8"],"value":1,"target_values":[{"t":"1","x":1},{"t":"3","x":1},{"t":"4","x":0},{"t":"5","x":1},{"t":"6","x":1},{"t":"8","x":1}],"status":[{"card_uid":1,"status_flag":"attack_boost","value":-1,"status_string":null},{"card_uid":3,"status_flag":"attack_boost","value":-1,"status_string":null},{"card_uid":4,"status_flag":"attack_boost","value":0,"status_string":null},{"card_uid":5,"status_flag":"attack_boost","value":-1,"status_string":null},{"card_uid":6,"status_flag":"attack_boost","value":-1,"status_string":null},{"card_uid":8,"status_flag":"attack_boost","value":-1,"status_string":null}]}],"end":[{"card_uid":107,"status_flag":"attack_boost","value":0},{"card_uid":101,"status_flag":"attack_boost","value":0}]},"15":{"begin":[{"card_uid":107,"status_flag":"jammed","value":0},{"card_uid":101,"status_flag":"jammed","value":0},{"card_uid":3,"status_flag":"1_cooldown","value":3},{"card_uid":5,"status_flag":"1_cooldown","value":3},{"card_uid":6,"status_flag":"1_cooldown","value":2},{"card_uid":"1","status_flag":"enfeeble","value":0},{"card_uid":"4","status_flag":"imbued_skill","value":0},{"card_uid":"4","status_flag":"imbued_value","value":0}],"draws":[10],"plays":[{"card_uid":7,"status":[]}],"actions":[{"card_uid":-1,"skill_id":"imbue","targets":["6"],"value":1,"target_values":[{"t":"6","x":1}],"status":[{"card_uid":6,"status_flag":"imbued_value","value":1,"status_string":"berserk"}]},{"card_uid":3,"skill_id":"rally","targets":["8"],"value":7,"target_values":[{"t":"8","x":7}],"status":[{"card_uid":8,"status_flag":"attack_boost","value":6,"status_string":null}]},{"card_uid":5,"skill_id":"rally","targets":["8"],"value":7,"target_values":[{"t":"8","x":7}],"status":[{"card_uid":8,"status_flag":"attack_boost","value":13,"status_string":null}]},{"card_uid":6,"skill_id":"rally","targets":["4"],"value":7,"target_values":[{"t":"4","x":7}],"status":[{"card_uid":4,"status_flag":"attack_boost","value":7,"status_string":null}]},{"card_uid":107,"skill_id":"evade","targets":[107],"value":1,"instant":1},{"card_uid":-1,"skill_id":"enfeeble","targets":[107],"value":0,"target_values":[{"t":107,"x":0}],"status":[{"card_uid":107,"status_flag":"enfeeble","value":0,"status_string":null}]},{"card_uid":107,"skill_id":"evade","targets":[107],"value":1,"instant":1},{"card_uid":-1,"skill_id":"weaken","targets":[107,101,109],"value":1,"target_values":[{"t":107,"x":0},{"t":101,"x":1},{"t":109,"x":1}],"status":[{"card_uid":107,"status_flag":"attack_boost","value":0,"status_string":null},{"card_uid":101,"status_flag":"attack_boost","value":-1,"status_string":null},{"card_uid":109,"status_flag":"attack_boost","value":-1,"status_string":null}]},{"card_uid":1,"skill_id":"strike","targets":[107],"value":6,"target_values":[{"t":107,"x":6}],"status":[]},{"card_uid":1,"skill_id":0,"targets":[107],"value":3,"block":[],"status":[]},{"card_uid":3,"skill_id":0,"targets":[101],"value":3,"block":[],"status":[]},{"card_uid":4,"skill_id":"strike","targets":[107],"value":4,"target_values":[{"t":107,"x":4}],"status":[]},{"card_uid":4,"skill_id":0,"targets":[109],"value":12,"block":[],"status":[]},{"card_uid":5,"skill_id":0,"targets":[-2],"value":1},{"card_uid":6,"skill_id":0,"targets":[-2],"value":2},{"card_uid":6,"skill_id":"berserk","targets":[6],"value":1,"block":[],"status":[{"card_uid":6,"status_flag":"berserk","value":2,"status_string":null}]},{"card_uid":8,"skill_id":0,"targets":[-2],"value":18},{"card_uid":8,"skill_id":"flurry","targets":[8],"value":1}],"defend_kill":[101,107]}},"effect_ids":{"106":"106","111":"111"},"battleground_effects":{"106":{"id":"106","name":"Angelic Legion","desc":"Angels have risen to fight, gaining Legion equal to 50% of the their base Attack.","web_picture":"filter_angel_64.png","icon":"filter_angel_64","effect":{"add_skill":[{"id":"legion","mult":"0.5","base":"attack","y":"6"}],"skill":{"projectile_effect":{"prefab":"Legion_Projectile","delay":"0","duration":".5","translation":".5","offset":"2"},"target_effect":{"prefab":"Legion_Angel_Target","delay":".5","duration":"1","shake":"true"},"id":"displayEffect","trigger":"onSkill","y":"6","s":"legion"}}},"111":{"id":"111","name":"Searing Essence","desc":"When an Elemental is damaged by an attack, it deals Scorch damage to the attacker equal to 10% of the Elemental\'s base Health.","icon":"filter_elementals_64","effect":{"add_skill":[{"id":"counterburn","mult":"0.1","base":"health","y":"5"}],"skill":{"target_effect":{"prefab":"FireVengence_Reverse","prefab_enemy":"FireVengence","bundle_id":"69","delay":".5","duration":"1.5","shake":"true"},"id":"displayEffect","trigger":"onSkill","s":"counterburn"}}}},"defend_deck":{"101":{"unit_index":"40","unit_id":"22048","level":"5","runes":{"1":{"item_id":"5161","slot":"1","skill_index":0}}},"102":{"unit_index":"24","unit_id":"27060","level":"6","runes":{"1":{"item_id":"5072","slot":"1","skill_index":0}}},"103":{"unit_index":"6","unit_id":"25026","level":"6","runes":{"1":{"item_id":"5152","slot":"1","skill_index":0}}},"104":{"unit_index":"13","unit_id":"25056","level":"6","runes":{"1":{"item_id":"5072","slot":"1","skill_index":0}}},"105":{"unit_index":"31","unit_id":"25064","level":"6","runes":{"1":{"item_id":"5062","slot":"1","skill_index":0}}},"106":{"unit_index":"60","unit_id":"2038","level":"6","runes":{"1":{"item_id":"5184","slot":"1","skill_index":1}}},"107":{"unit_index":"7","unit_id":"26026","level":"6","runes":{"1":{"item_id":"5162","slot":"1","skill_index":1}}},"108":{"unit_index":"18","unit_id":"21028","level":"5","runes":{"1":{"item_id":"5071","slot":"1","skill_index":0}}},"109":{"unit_index":"26","unit_id":"27064","level":"6","runes":{"1":{"item_id":"5011","slot":"1"}}},"110":{"unit_index":"12","unit_id":"21342","level":"6","runes":{"1":{"item_id":"5011","slot":"1"}}},"111":{"unit_index":"56","unit_id":"11642","level":"6","runes":{"1":{"item_id":"5101","slot":"1","skill_index":2}}},"112":{"unit_index":"29","unit_id":"21327","level":"5","runes":{"1":{"item_id":"5101","slot":"1","skill_index":1}}},"113":{"unit_index":"43","unit_id":"16045","level":"6","runes":{"1":{"item_id":"5112","slot":"1","skill_index":2}}},"114":{"unit_index":"47","unit_id":"2016","level":"7","runes":{"1":{"item_id":"5044","slot":"1","skill_index":2}}},"115":{"unit_index":"3","unit_id":"27037","level":"6","runes":{"1":{"item_id":"5184","slot":"1","skill_index":2}}}},"end_time":1473863712,"winner":1,"damageTaken":0,"damageDealt":187,"playerMaxHealth":286,"enemyMaxHealth":358,"rewards":[{"user_id":"1204400001","gold":210,"sp":0,"rating_change":0,"item":[],"points":"300","items":[],"xp":94,"event_points":"180"},{"user_id":"868091001","gold":0,"sp":0,"rating_change":0,"item":[]}],"enemy_name":"tucekmichal [DTP Family]","enemy_size":15}';
        module.newMatch(JSON.parse(battleInfo));
    }

    module.newMatch = function (battle_data) {
        var card_map = battle_data.card_map;

        var needUpdate = (unitMissing(battle_data.attack_commander.unit_id)
                || unitMissing(battle_data.attack_commander.unit_id));
        if (!needUpdate) {
            for (var uid in card_map) {
                needUpdate = unitMissing(card_map[uid].unit_id);
                if (needUpdate) {
                    break;
                }
            }
        }
        if (needUpdate) {
            var callback = function () {
                startMatch(battle_data);
            }
            DATA_UPDATER.updateCards(callback);
        } else {
            setTimeout(startMatch, 1, battle_data);
        }
    }

    function startMatch(battle_data) {
        setupBattlegrounds(battle_data.battleground_effects);
        startBattle(battle_data);
        playTurns(battle_data, true);
    }

    var battlegrounds;
    function setupBattlegrounds(battelground_effects) {

        var getbattleground = [];
        $("#battleground input").prop('checked', false);
        for (var id in battelground_effects) {
            // Check the BGE checkboxes, even though we're hiding the UI
            getbattleground.push(id);
            $("#battleground_" + id).prop('checked', true);
        }
        getbattleground = getbattleground.join();

        // Set up battleground effects, if any
        battlegrounds = getBattlegrounds(getbattleground, getraid);
    }

    var cachedField;
    function resetField() {
        cachedField = {
            cpu: {
                assaults: []
            },
            player: {
                assaults: []
            },
            uids: {}
        };
        cachedHands = {
            cpu: [],
            player: []
        };
        cachedDraws = {};
    }

    function startBattle(battle_data) {
        toggleUI(false);
        var deck_player = { deck: [] };
        var deck_cpu = { deck: [] };
        var card_map = battle_data.card_map;

        resetField();

        //try {
            var commander = battle_data.attack_commander;
            deck_player.commander = makeUnitInfo(commander.unit_id, commander.level);
            commander = get_card_apply_battlegrounds(deck_player.commander, battlegrounds);
            commander.health_left = commander.health;
            commander.owner = 'player';
            var uid = -1;
            commander.uid = uid;
            cachedField.player.commander = commander;
            cachedField.uids[uid] = commander;

            commander = battle_data.defend_commander;
            if (!commander) commander = battle_data.attack_commander
            deck_cpu.commander = makeUnitInfo(commander.unit_id, commander.level);
            commander = get_card_apply_battlegrounds(deck_cpu.commander, battlegrounds);
            commander.health_left = commander.health;
            commander.owner = 'cpu';
            var uid = -2;
            commander.uid = uid;
            cachedField.cpu.commander = commander;
            cachedField.uids[uid] = commander;

            for (var uid in card_map) {
                var unit = card_map[uid];
                var runes = unit.runes;
                unit = makeUnitInfo(unit.unit_id, unit.level);
                for (var r in runes) {
                    unit.runes.push({ id: runes[r].item_id });
                }

                var owner;
                var deck;
                if (uid <= 15) {
                    owner = 'player';
                    deck = deck_player;
                } else if (uid <= 115) {
                    owner = 'cpu';
                    deck = deck_cpu;
                }
                deck.deck.push(unit);

                var cachedCard = get_card_apply_battlegrounds(unit, battlegrounds);
                cachedCard.owner = owner;

                cachedCard.uid = uid;
                cachedField.uids[uid] = cachedCard;
            }
        /*}
        catch (err) {
            console.log(err);
        }*/

        drawField(1);
    }

    var turnsGlobal = [];
    function playTurns(battle_data, playTurn0) {
        var lastTurn = 0;

        var turns = battle_data.turn;
        turnsGlobal = [];
        for (var turn in turns) {
            if (turn != 0 || playTurn0) {
                turnsGlobal.push(turn);
            }
        }
        i_cached = 0;
        lastTurn_cached = lastTurn;
        data_cached = battle_data;
        setTimeout(doNext, 1);
    }

    function doNext() {
        processTurnsAsync(i_cached, lastTurn_cached, data_cached);
    }

    var data_cached;
    var lastTurn_cached;
    var i_cached;
    function processTurnsAsync(i, lastTurn, battle_data) {
        if (i < turnsGlobal.length) {
            var turns = battle_data.turn;
            var turn = turnsGlobal[i];
            if (turn > lastTurn) lastTurn = turn;
            var turnInfo = turns[turn];
            var p = (turn % 2 == 1 ? 'player' : 'cpu');
            for (var phase in turnInfo) {
                processTurnPhase(phase, p, turnInfo[phase]);
            }

            drawField(lastTurn);

            i++;
            i_cached = i;
            lastTurn_cached = lastTurn;
            setTimeout(module.doNext, 1);
        } else if (!areCommandersAlive()) {
            battleFinished(lastTurn, battle_data);
        }
    }

    function processTurnPhase(phase, p, turnData) {
        switch (phase.toLowerCase()) {
            case 'begin':
                updateFlags(turnData);
                break;
            case 'draws':
                processDraws(p, turnData);
                break;
            case 'plays':
                processPlay(p, turnData);
                doSetEvade(p);
                break;
            case 'upkeep':
            case 'actions':
                doActions(turnData);
                break;
            case 'end':
                updateFlags(turnData);
                break;
            case 'attack_kill':
            case 'defend_kill':
                processRemoval(turnData);
                break;
        }
    }

    function processDraws(p, draws) {
        var hand = cachedHands[p];
        for (var i = 0; i < draws.length; i++) {
            var uid = draws[i];
            if (!cachedDraws[uid]) {
                cachedDraws[uid] = true;
                var card = cachedField.uids[uid];
                hand.push(card);
            }
        }
    }

    function updateFlags(turnData) {
        for (var key in turnData) {
            var status = turnData[key];
            if (status.status_flag == "imbued_value") {
                var card = cachedField.uids[status.card_uid];
                card.removeImbue();
            } else {
                updateStatusFlag(status);
            }
        }
    }

    function updateStatusFlag(status) {
        var card = cachedField.uids[status.card_uid];
        var status_flag = status.status_flag;
        if (status_flag) {
            if (status_flag.indexOf("_") >= 0) {
                if (status_flag.indexOf("enhance") >= 0) {
                    card.enhanced = 0;
                    return;
                } else if (status_flag.indexOf("flurry") >= 0) {
                    card.flurry.countdown = status.value;
                    return;
                } else if (status_flag == "attack_boost") {
                    if (status.value == 0) {
                        card.attack_rally = 0;
                        card.attack_weaken = 0;
                    }
                    return;
                } else if (status_flag.indexOf("cooldown") >= 0) {
                    countdownSkill(card, status_flag, status.value);
                    return;
                }
                card[status_flag] = status.value;
            } else if (status_flag == "protect") {
                card.protected = status.value;
            } else if (status_flag == "poison") {
                card.poisoned = status.value;
            } else if (status_flag == "poisoner") {
                // Ignore
            } else if (status_flag == "burn") {
                card['scorched'] = { 'amount': status.value, 'timer': 2 };
            } else if (status_flag == "burn_timer") {
                // Ignore
            } else if (status_flag == "valor") {
                card.attack_valor = status.value;
            } else {
                card[status_flag] = status.value;
            }
        }
    }

    function countdownSkill(card, status_flag, value) {
        var skillIndex = status_flag.substring(0, status_flag.indexOf("_"));
        var skills = get_skills(card.id, card.level);
        var skillType = skills[skillIndex].id;
        var instances = 0;
        for (var i = 0; i <= skillIndex; i++) {
            var skill = skills[i];
            if (skill.id == skillType) {
                instances++;
            }
        }
        countdownSkillInner(card, skillType, instances, value);
    }

    function countdownSkillInner(card, skillType, instances, value) {
        var skills;
        if (skillType == 'rally' || skillType == 'legion' || skillType == 'fervor') {
            skills = card.empowerSkills
        } else {
            skills = card.skill;
        }
        for (var i = 0; i < skills.length; i++) {
            var skill = skills[i];
            if (skill.id == skillType) {
                instances--;
                if (!instances) {
                    if (value != undefined) {
                        skill.countdown = value;
                    } else {
                        skill.countdown = skill.c - 1;
                    }
                }
            }
        }
    }

    function doActions(actions) {
        jamTracking = {};
        for (var i = 0; i < actions.length; i++) {
            var action = actions[i];
            switch (action.skill_id.toString()) {
                // Passives (ignore these)
                case 'pierce':
                case 'flurry':
                    break;

                case 'evade':
                    decrementField(action, 'invisible');
                    break;

                case 'berserk':
                    incrementField(action, 'attack_berserk');
                    break;

                case 'valor':
                    setStatus(action, 'attack_valor');
                    break;

                case 'fervor':
                case 'rally':
                case 'legion':
                    incrementField(action, 'attack_rally');
                    break;

                case 'weaken':
                    doWeaken(action);
                    break;

                case 'imbue':
                    doImbue(action);
                    break;

                case 'jam':
                    trackJam(action);
                case 'enfeeble':
                case 'enhance':
                case 'nullify':
                case 'pierce':
                case 'protect':
                case 'protect_ice':
                    updateFlags(action.status);
                    break;

                case 'leech':
                    doLeech(action);
                    break;

                case 'heal':
                    doHeal(action);
                    break;

                case '0': // Attack
                case 'burn':
                case 'counter':
                case 'frost':
                case 'poison':
                case 'poisonstrike':
                case 'strike':
                    doDamage(action);
                    break;

                // Ignore everything else
                default:
                    break;
            }
        }
    }

    var jamTracking = {};
    function trackJam(action) {
        var uid = action.card_uid;
        var targets = action.target_values;
        for (var key in targets) {
            jamTracking[uid] = (jamTracking[uid] + 1 || 1);
            if (targets[key].x) {
                var card = cachedField.uids[uid];
                countdownSkillInner(card, "jam", jamTracking[uid]);
            }
        }
    }

    function resetFlurry(action) {
        var targets = action.targets;
        for (var key in targets) {
            var target = targets[key];
            var card = cachedField.uids[target];
            var dualStrike = card.flurry;
            dualStrike.countdown = dualStrike.c;
        }
    }

    function decrementField(action, statusName) {
        var targets = action.targets;
        for (var key in targets) {
            var target = targets[key];
            var card = cachedField.uids[target];
            card[statusName]--;
        }
    }

    function incrementField(action, statusName) {
        var targets = action.target_values;
        if (targets) {
            for (var key in targets) {
                var target = targets[key];
                var card = cachedField.uids[target.t];
                card[statusName] += ~~target.x;
            }
        } else {
            var value = action.value;
            targets = action.targets;
            for (var key in targets) {
                var target = targets[key];
                var card = cachedField.uids[target];
                card[statusName] += ~~value;
            }
        }
    }

    function setStatus(action, statusName) {
        var targets = action.target_values;
        if (targets) {
            for (var key in targets) {
                var target = targets[key];
                var card = cachedField.uids[target.t];
                card[statusName] = ~~target.x;
            }
        } else {
            var value = action.value;
            targets = action.targets;
            for (var key in targets) {
                var target = targets[key];
                var card = cachedField.uids[target];
                card[statusName] = ~~value;
            }
        }
    }

    function doImbue(action) {
        var targets = action.status;
        for (var key in targets) {
            var target = targets[key];
            if (target.status_flag == "imbued_value") {
                var card = cachedField.uids[target.card_uid];
                var skill = {
                    id: target.status_string,
                    x: target.value
                }
                card.imbue(skill);
            }
        }
    }

    function doWeaken(action) {
        var targets = action.target_values;
        if (targets) {
            for (var key in targets) {
                var target = targets[key];
                var card = cachedField.uids[target.t];
                doWeakenTarget(card, target.x);
            }
        } else {
            var value = action.value;
            targets = action.targets;
            for (var key in targets) {
                var target = targets[key];
                var card = cachedField.uids[target];
                doWeakenTarget(card, value);
            }
        }
    }

    function doWeakenTarget(card, value) {
        card.attack_weaken += value;
        if (card.attack_weaken > (card.attack + card.attack_berserk)) {
            card.attack_weaken = card.attack + card.attack_berserk;
        }
    }

    function doHeal(action) {
        var targets = action.target_values;
        if (targets) {
            for (var key in targets) {
                var target = targets[key];
                var card = cachedField.uids[target.t];
                card.health_left += ~~target.x;
            }
        } else {
            var value = action.value;
            targets = action.targets;
            for (var key in targets) {
                var target = targets[key];
                var card = cachedField.uids[target];
                card.health_left += ~~value;
            }
        }
        updateFlags(action.status);
    }

    function doLeech(action) {
        var target = action.card_uid;
        var value = action.value;
        var card = cachedField.uids[target];
        card.health_left += value;
    }

    function doDamage(action) {
        var targets = action.target_values;
        if (targets) {
            for (var key in targets) {
                var target = targets[key];
                var card = cachedField.uids[target.t];
                damageCard(card, ~~target.x);
            }
        } else {
            var value = action.value;
            targets = action.targets;
            for (var key in targets) {
                var target = targets[key];
                var card = cachedField.uids[target];
                damageCard(card, ~~value);
            }
        }
        updateFlags(action.status);
    }

    function damageCard(card, damage) {
        card.health_left -= damage;
        if (card.health_left < 0) card.health_left = 0;
    }

    function processPlay(p, turnData) {
        var assaults = cachedField[p].assaults;
        for (var i = 0; i < assaults.length; i++) {
            var card = assaults[i];
            if (card.timer) card.timer--;
        }

        for (var key in turnData) {
            var play = turnData[key];
            playCard(play.card_uid);
        }
    }

    function doSetEvade(p) {
        var assaults = cachedField[p].assaults;
        for (var i = 0; i < assaults.length; i++) {
            var card = assaults[i];
            if (card.evade) card.invisible = card.evade;
        }
    }

    function playCard(uid) {
        var p = (uid <= 15 ? 'player' : 'cpu');
        var card = cachedField.uids[uid];
        var assaults = cachedField[p].assaults;
        initializeCard(card, p, assaults.length);
        card.played = true;
        assaults.push(card);

        var hand = cachedHands[p];

        for (var i = 0; i < hand.length; i++) {
            var card = hand[i];
            if (card.uid == uid) {
                hand.splice(i, 1);
                break;
            }
        }
    }

    function battleFinished(lastTurn, battle_data) {
        drawField(lastTurn, true);

        var points = '';
        if (battle_data.rewards) {
            var rewards = battle_data.rewards[0];
            if (rewards.guild_war_points) {
                points = " (" + rewards.guild_war_points + " Points)";
            } else if (rewards.num_stars != undefined) {
                var stars = rewards.num_stars;
                points = " (" + stars + " Stars)";
            } else if (rewards.event_points) {
                points = " (" + rewards.event_points + " Stars)";
            }
        }

        if (!cachedField.uids[-1].isAlive()) {
            outp('<br><h1>LOSS' + points + '</h1><br>');
        } else if (!cachedField.uids[-2].isAlive()) {
            outp('<br><h1>WIN' + points + '</h1><br>');
        } else {
            outp('<br><h1>DRAW' + points + '</h1><br>');
        }
    };

    function unitMissing(unitID) {
        return (typeof CARDS[unitID] === "undefined");
    }

    function drawField(turn, matchEnded) {
        if (_DEFINED("nodraw")) {
            return;
        }

        CARD_GUI.clearCardSpace();
        var copy_field = {};
        copyField(copy_field, true);
        if (matchEnded) {
            CARD_GUI.draw_cards(copy_field, null);
        } else {
            cachedHands.player.choice = choice;
            CARD_GUI.draw_cards(copy_field, cachedHands.player);
        }
    }

    function copyField(copy_field, doCountdowns) {
        copy_field.cpu = { assaults: [] };
        copy_field.player = { assaults: [] };
        var uids = {};
        copy_field.uids = uids;

        for (var i in cachedField.uids) {
            var copy = {};
            uids[i] = $.extend({}, cachedField.uids[i]);
        }
        copy_field.cpu.commander = uids[-2];
        copy_field.player.commander = uids[-1];

        copyPlayerField(cachedField, copy_field, 'cpu', doCountdowns);
        copyPlayerField(cachedField, copy_field, 'player', doCountdowns);
    }

    function copyPlayerField(original_field, copy_field, player, doCountdowns) {
        var originalAssaults = original_field[player].assaults;
        var copyAssaults = copy_field[player].assaults;
        var uids = copy_field.uids;
        for (var i = 0; i < originalAssaults.length; i++) {
            var uid = originalAssaults[i].uid;
            var copy = uids[uid];
            if (doCountdowns && player == 'player') {
                // Count down skills/timer for player's cards in GUI
                if (copy.timer) {
                    copy.timer--;
                } else if (!copy.jammed) {
                    countDownSkills(copy.skill);
                    countDownSkills(copy.empowerSkills);
                }
            }
            copyAssaults.push(copy);
        }
    }

    return module;
}());