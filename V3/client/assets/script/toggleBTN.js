/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
cc.Class({
    extends: cc.Component,

    properties: {
        self: {
            default: null, type: cc.Button
        },
        other1: {
            default: null, type: cc.Button
        },
        other2: {
            default: null, type: cc.Button
        },
    },

    // called every frame, uncomment this function to activate update callback
    shifter: function () {
        this.self.interactable = false;
        this.other1.interactable = true;
        this.other2.interactable = true;
    },
});
