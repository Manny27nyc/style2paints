/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
cc.Class({
    extends: cc.Component,

    properties: {
        bar: {
            default: null,
            type: cc.ProgressBar
        },
        lab: {
            default: null,
            type: cc.Label
        },
    },

    change: function(name, x=0){
        this.bar.progress = x;
        this.lab.string = name;
    },

    update (dt) {
        let t = this.bar.progress;
        t += 0.005;
        if(t > 1){
            t = 1;
        }
        this.bar.progress = t;
    },
});
