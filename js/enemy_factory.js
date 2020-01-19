game.EnemyManager = me.Entity.extend({
	generateEnemy: function () {
		me.game.world.addChild(me.pool.pull("enemy", me.game.viewport.width - 1, Math.random() * (me.game.viewport.height - 200), this.velocity), 2);
	},
	init : function (x, y, delay, velocity) {
		this._super(me.Entity, "init", [x, y, {
			width: 1, height: 1
		}]);

		this.delay = delay;
		this.velocity = velocity;
		this.currentTime = 0;
	},

	update: function (dt) {
		// countdown
		// add children
		if (this.currentTime >= 1) {
			this.generateEnemy();
			this.currentTime = 0;
		}

	}

  });