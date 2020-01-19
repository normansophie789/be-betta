game.EnemyManager = me.Entity.extend({
	generateEnemy: function () {
		let x = me.game.viewport.width - 1;
		let y = Math.random() * (me.game.viewport.height - 200);
		me.game.world.addChild(me.pool.pull("oillspill", x, y, this.velocity), 2);
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
		this.currentTime += (me.timer.getDelta() / this.delay);

		if (Math.floor(this.currentTime) % 3 == 0) {
			this.generateEnemy();
		}

	}

  });