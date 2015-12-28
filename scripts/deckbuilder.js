var card_cache = {};

var drawAllCards = function () {
    var list = [];
    for (var id in CARDS.root.unit) {
        if (id < 10000) {
            list.push({ id: id, level: 7 });
            if (id > 999 && CARDS.root.unit["1" + id]) {
                list.push({ id: "1" + id, level: 7 });
                list.push({ id: "2" + id, level: 7 });
            }
        }
    }
    draw_card_list(list);
};