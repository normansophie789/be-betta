game.Apple = me.Entity.extend({
	init: function (x, y) {
		this._super(me.Entity, "init", [x, y, {
			image : "apple",
			width : 138,
			height : 182
		}]);
		this.velx = 500;
        this.body = new me.Body(this);
		this.body.setVelocity(0, 0);
        this.body.addShape(new me.Ellipse(0, 0, this.width * 0.95, this.height * 0.95));
		this.body.collisionType = me.collision.types.ENEMY_OBJECT;
		this.currentAngle = 0;
		this.prevAngle = 0;
	},
  
	update: function (dt) {
		this._super(me.Entity, "update", [dt]);
		this.body.update();
		this.pos.x -= this.velx * dt / 1000;
		
		this.renderable.currentTransform.rotate(this.currentAngle-this.prevAngle);
        this.prevAngle = this.currentAngle;

		if (this.pos.x < -this.width) {
			me.game.world.removeChild(this, true);
			return false;
		}

		return true;
	}
  });