/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
module.exports = function BoxCanvas(name){

    let self = Object();

    self.spriteFrame = new cc.SpriteFrame();
    self.texture2d = null;

    self.canvas = document.createElement("canvas");
    self.canvas.id = 'canvas_' + name;

    self.ini = function (weight, height) {

        self.canvas.width = parseInt(weight);
        self.canvas.height = parseInt(height);

        self.ctx = self.canvas.getContext('2d');

        self.ctx.fillStyle = self.ctx.createPattern(window.boxLoader.image, "repeat");
        self.ctx.fillRect(0, 0, self.canvas.width, self.canvas.height);

        self.texture2d = new cc.Texture2D();
        self.spriteFrame.setTexture(self.texture2d);
        self.texture2d.initWithElement(self.canvas);
        self.texture2d.handleLoadedTexture(true);

        return self.spriteFrame;
    };

    return self;
};