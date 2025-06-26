/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
cc.Class({
    extends: cc.Component,

    properties: {
        A: {
            default: null, type: cc.Node
        },
        B: {
            default: null, type: cc.Node
        },
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        this.node.width = this.A.width - this.B.width;
     },
});
