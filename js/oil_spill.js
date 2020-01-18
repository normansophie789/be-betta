game.Enemy = me.Entity.extend({
	init: function (x, y) {
		this._super(me.Entity, "init", [x, y, {
			image : "oil",
			width : 64,
			height : 64
		}]);
		this.velx = 50;
		this.body.setVelocity(0, 0);
		this.body.collisionType = me.collision.types.ENEMY_OBJECT;
	},
  
	update: function (dt) {
		this._super(me.Entity, "update", [dt]);

		this.body.update();

		this._super(me.Entity, "update", [dt]);
		this.pos.x -= this.velx * dt / 1000;

		if (this.pos.x < -this.width)
			this.pos.x = me.game.viewport.width - 10;
		
		return true;
	}
  });