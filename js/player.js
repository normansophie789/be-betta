game.Player = me.Sprite.extend({
    init: function () {
        var image = me.loader.getImage("player");
        this._super(me.Sprite, "init", [
            image.width + 50,
            me.game.viewport.height - image.height - 50,
            { image : image }
        ]);
        this.vely = 450;
        this.maxY = me.game.viewport.height - this.height / 2;
    },
    update : function (time) {
        this._super(me.Sprite, "update", [time]);
        if (me.input.isKeyPressed("up")) {
            this.pos.y -= this.vely * time / 1000;
        }
    
        if (me.input.isKeyPressed("down")) {
            this.pos.y += this.vely * time / 1000;
        }
    
        this.pos.y = me.Math.clamp(this.pos.y, me.game.viewport.height * 0.25, this.maxY);
    
        return true;
    },

    onCollision : function (res, other) {
        if (other.body.collisionType === me.collision.types.ENEMY_OBJECT) {
            console.log("I've been hit");
            return false;
        }
    }
});