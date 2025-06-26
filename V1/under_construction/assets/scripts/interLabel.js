/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
cc.Class({
    extends: cc.Component,

    properties: {
        chinese: {
            default: "", type: cc.String
        },
        japanese: {
            default: "", type: cc.String
        },
        english: {
            default: "", type: cc.String
        },
    },

    chinese_shift: function () {
        this.getComponent('cc.RichText').string = this.chinese;
    },

    english_shift: function () {
        this.getComponent('cc.RichText').string = this.english;
    },

    japanese_shift: function () {
        this.getComponent('cc.RichText').string = this.japanese;
    },

});
