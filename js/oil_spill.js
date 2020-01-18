game.Enemy = me.Entity.extend({
	init: function (x, y) {
		this._super(me.Entity, "init", [x, y, {
			image : "oil_spill",
			width : 300,
			height : 300
		}]);
		this.velx = 100;
	},
  
	update: function (dt) {
		this._super(me.Entity, "update", [dt]);
		this.pos.x -= this.velx * dt / 1000;

		if (this.pos.x < -this.width) {
			me.game.world.removeChild(this, true);
			return false;
		}
		
		game.playScreen.checkIfLoss(this.pos.x, this.pos.y, this.height)
		
		return true;
	}
  });