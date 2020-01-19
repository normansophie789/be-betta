game.Ring = me.Entity.extend({
	init: function (x, y) {
		this._super(me.Entity, "init", [x, y, {
			image : "ring",
			width : 219,
			height : 153
		}]);
		this.velx = 150;
        this.body = new me.Body(this);
		this.body.setVelocity(0, 0);
        this.body.addShape(new me.Ellipse(0, 0, this.width * 0.95, this.height * 0.95));
		this.body.collisionType = me.collision.types.ENEMY_OBJECT;
	},
  
	update: function (dt) {
		this._super(me.Entity, "update", [dt]);
		this.body.update();
		this.pos.x -= this.velx * dt / 1000;

		if (this.pos.x < -this.width) {
			me.game.world.removeChild(this, true);
			return false;
		}

		return true;
	}
  });