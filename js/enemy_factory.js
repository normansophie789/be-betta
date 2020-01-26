game.EnemyManager = me.Entity.extend({
	init : function (x, y) {
		this._super(me.Entity, "init", [x, y, {
			width: 1, height: 1
		}]);

		this.currentTime = 0;

		this.enemyTimers = {
			oilspill: { delay: 3000, timer: 0, counter: 0},
			bag: { delay: 7000, timer: 0, counter: 0},
			net: { delay: 10000, timer: 0, counter: 0},
			ring: { delay: 15000, timer: 0, counter: 0},
			apple: { delay: 20000, timer: 0, counter: 0}
		}
	},

	generateEnemy: function (type) {
		var x = me.game.viewport.width - 1;
		var y = 50 +  Math.random() * (me.game.viewport.height - 50);
		var enemyName = null;

		switch(type) {
			case 1: 
				this.enemyTimers.oilspill.counter ++;
				enemyName = "oilspill";
				console.log("case 1");
				break;
			case 2: 
				this.enemyTimers.bag.counter ++;
				enemyName = "bag";
				console.log("case 2")
				break;
			case 3: 
				this.enemyTimers.net.counter ++;
				enemyName = "net";
				console.log("case 3")
				break;
			case 4: 
				this.enemyTimers.ring.counter ++;
				enemyName = "ring";
				console.log("case 4")
				break;
			case 5: 
				this.enemyTimers.apple.counter ++;
				enemyName = "apple";
				console.log("case 5")
				break;
		}

		if (enemyName)
			me.game.world.addChild(me.pool.pull(enemyName, x, y), 2);
	},

	update: function (dt) {
		this.currentTime += dt;
		this.enemyTimers.oilspill.timer += dt;
		this.enemyTimers.bag.timer += dt;
		this.enemyTimers.net.timer += dt;
		this.enemyTimers.ring.timer += dt;
		this.enemyTimers.apple.timer += dt;
		
		if (this.enemyTimers.oilspill.timer >= this.enemyTimers.oilspill.delay) {
			this.generateEnemy(1);
			this.enemyTimers.oilspill.timer = 0;
		}

		if (this.enemyTimers.bag.timer >= this.enemyTimers.bag.delay) {
			this.generateEnemy(2);
			this.enemyTimers.bag.timer = 0;
		}

		if (this.enemyTimers.net.timer >= this.enemyTimers.net.delay) {
			this.generateEnemy(3);
			this.enemyTimers.net.timer = 0;
		}

		if (this.enemyTimers.ring.timer >= this.enemyTimers.ring.delay) {
			this.generateEnemy(4);
			this.enemyTimers.ring.timer = 0;
		}

		if (this.enemyTimers.apple.timer >= this.enemyTimers.apple.delay){
			this.generateEnemy(5);
			this.enemyTimers.apple.timer = 0;
		}

		if (this.currentTime >= 20000) {
			this.enemyTimers.oilspill.delay * 0.99;
			this.enemyTimers.bag.delay * 0.99;
			this.enemyTimers.net.delay * 0.99;
			this.enemyTimers.ring.delay * 0.99;
			this.enemyTimers.apple.delay * 0.995;
		}

		return true;

	}

  });