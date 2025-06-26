/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
cc.Class({
    extends: cc.Component,

    chinese: function () {
        console.log("chinese");
        var tests = this.getComponentsInChildren("interLabel");
        for (var i = 0; i < tests.length; i++) {
            tests[i].chinese_shift();
        }
        tests = this.getComponentsInChildren("interLabelraw");
        for (var i = 0; i < tests.length; i++) {
            tests[i].chinese_shift();
        }
    },

    japanese: function () {
        console.log("japanese");
        var tests = this.getComponentsInChildren("interLabel");
        for (var i = 0; i < tests.length; i++) {
            tests[i].japanese_shift();
        }
        tests = this.getComponentsInChildren("interLabelraw");
        for (var i = 0; i < tests.length; i++) {
            tests[i].japanese_shift();
        }
    },

    english: function () {
        console.log("english");
        var tests = this.getComponentsInChildren("interLabel");
        for (var i = 0; i < tests.length; i++) {
            tests[i].english_shift();
        }
        tests = this.getComponentsInChildren("interLabelraw");
        for (var i = 0; i < tests.length; i++) {
            tests[i].english_shift();
        }
    },

    onLoad: function () {
        this.english();
        if (navigator.language.substring(0,2) == "zh") {
            this.chinese();
        }
        if (navigator.language.substring(0, 2) == "ja") {
            this.japanese();
        }
    }

});
