/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad: function () {
        window.eraser_masker = this.node;
    },

    update (dt) {
        this.node.x = window.mousePosition.x - cc.winSize.width / 2;
        this.node.y = window.mousePosition.y - cc.winSize.height / 2;
    },

});
