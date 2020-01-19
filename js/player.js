game.Player = me.Entity.extend({
    init: function (x, y) {
        this._super(me.Entity, "init", [
            x, y, {
                image: "amber",
                width: 124,
                height: 80
            }
        ]);
        this.vely = 450;
        this.maxY = me.game.viewport.height - this.height;
    },
    update : function (dt) {
        this._super(me.Entity, "update", [dt]);
        if (me.input.isKeyPressed("up")) {
            this.pos.y -= this.vely * dt / 1000;
        }
    
        if (me.input.isKeyPressed("down")) {
            this.pos.y += this.vely * dt / 1000;
        }
    
        this.pos.y = me.Math.clamp(this.pos.y, me.game.viewport.height * 0.25, this.maxY);
    
        return true;
    },

    onCollision : function (res, other) {
        if (other.body.collisionType === me.collision.types.ENEMY_OBJECT) {
        
            return false;
        }
    }
});