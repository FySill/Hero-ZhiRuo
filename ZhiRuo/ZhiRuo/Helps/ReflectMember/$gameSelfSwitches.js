var $gameSelfSwitches = {
    _data: {
       '5,6,A': true,
       '2,1,A': true,
       '2,4,A': true,
       '2,2,A': true,
       '2,3,A': true,
       '2,5,A': true,
       '1,2,A': true,
       '1,1,A': true,
       '1,6,A': true,
       '8,9,A': true,
       '8,2,A': true,
       '1,14,C': true,
       '1,16,A': true,
       '7,7,A': true,
       '7,9,A': true,
       '7,4,A': true,
       '11,12,A': true,
       '28,3,A': true,
       '11,1,A': true,
       '11,2,A': true,
       '11,3,A': true,
       '11,4,A': true,
       '12,13,A': true,
       '21,3,A': true,
       '10,3,A': true,
       '195,17,A': true,
       '195,19,A': true,
       '16,4,A': true,
       '69,8,A': true,
       '37,2,A': true,
       '39,7,A': true,
       '40,4,A': true,
       '40,5,A': true,
       '40,6,A': true,
       '38,5,A': true,
       '36,21,A': true,
       '36,9,A': true,
       '36,7,A': true,
       '36,8,A': true,
       '36,11,A': true,
       '35,3,A': true,
       '68,9,A': true,
       '29,4,A': true,
       '233,9,A': true,
       '297,4,A': true,
       '139,10,A': true,
       '69,19,A': true,
       '336,5,A': true,
       '144,4,A': true,
       '22,3,A': true,
    },
    '@': "Game_SelfSwitches",
    initialize: function () {
        this.clear();
    },
    clear: function () {
        this._data = {};
    },
    value: function (key) {
        return !!this._data[key];
    },
    setValue: function (key, value) {
        if (value) {
            this._data[key] = true;
        } else {
            delete this._data[key];
        }
        this.onChange();
    },
    onChange: function () {
        $gameMap.requestRefresh();
    },
}