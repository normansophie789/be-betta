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
        this.maxY = me.game.viewport.height - this.height/2;
        this.body = new me.Body(this);
        this.body.addShape(new me.Ellipse(0, 0, this.width*0.4, this.height*0.4));
        this.body.setVelocity(0, 0);
		this.body.collisionType = me.collision.types.PLAYER_OBJECT;
    },
    update : function (dt) {
        this._super(me.Entity, "update", [dt]);
        
        this.body.update();
        if (me.input.isKeyPressed("up")) {
            this.pos.y -= this.vely * dt / 1000;
        }
    
        if (me.input.isKeyPressed("down")) {
            this.pos.y += this.vely * dt / 1000;
        }
    
        this.pos.y = me.Math.clamp(this.pos.y, this.height + 10, this.maxY);
        me.collision.check(this);
    
        return true;
    },

    onCollision : function (res, other) {
        if (other.body.collisionType === me.collision.types.ENEMY_OBJECT) {
            game.playScreen.resetGame(); // resetting the game if the player's been yeeted
            return false;
        }
    }
});