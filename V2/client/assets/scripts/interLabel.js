// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
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
