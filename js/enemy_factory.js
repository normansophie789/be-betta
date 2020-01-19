game.EnemyManager = me.Entity.extend({
	generateEnemy: function (type) {
		let x = me.game.viewport.width - 1;
		let y = Math.random() * (me.game.viewport.height - 200);
		let enemyName = null;

		switch(type) {
			case 1: 
				this.enemyCounts.oilspill ++;
				enemyName = "oilspill";
				console.log("case 1");
				break;
			case 2: 
				this.enemyCounts.bag ++;
				enemyName = "bag";
				console.log("case 2")
				break;
			case 3: 
				this.enemyCounts.net ++;
				enemyName = "net";
				console.log("case 3")
				break;
			case 4: 
				this.enemyCounts.ring ++;
				enemyName = "ring";
				console.log("case 4")
				break;
			case 5: 
				this.enemyCounts.apple ++;
				enemyName = "apple";
				console.log("case 5")
				break;
		}

		if (enemyName)
			me.game.world.addChild(me.pool.pull(enemyName, x, y, this.velocity), 2);
	},
	
	init : function (x, y, delay, velocity) {
		this._super(me.Entity, "init", [x, y, {
			width: 1, height: 1
		}]);

		this.delay = delay;
		this.velocity = velocity;
		this.currentTime = 0;

		this.enemyCounts = {
			oilspill: 0,
			bag: 0,
			net: 0,
			ring: 0,
			apple: 0
		}
	},

	update: function (dt) {
		this.currentTime += (me.timer.getDelta() / this.delay);

		if (this.currentTime > 1) {
			if (Math.floor(this.currentTime) % 2 == 0 && this.enemyCounts.oilspill < 1) {
				// oil spill
				this.generateEnemy(1);
			} else if (Math.floor(this.currentTime) % 3 == 0 && this.enemyCounts.bag < 1) {
				// bag
				this.generateEnemy(2);
				this.enemyCounts.net= 0;
				this.enemyCounts.ring= 0;
				this.enemyCounts.apple= 0;
			} else if (Math.floor(this.currentTime) % 5 == 0 && this.enemyCounts.net < 1) {
				// net
				this.generateEnemy(3);
				this.enemyCounts.oilspill= 0;
				this.enemyCounts.bag= 0;
				this.enemyCounts.ring= 0;
				this.enemyCounts.apple= 0;
			} else if (Math.floor(this.currentTime) % 7 == 0 && this.enemyCounts.ring < 1) {
				//ring
				this.generateEnemy(4);
				this.enemyCounts.oilspill= 0;
				this.enemyCounts.bag= 0;
				this.enemyCounts.net= 0;
				this.enemyCounts.apple= 0;
			} else if (Math.floor(this.currentTime) % 11 == 0 && this.enemyCounts.apple < 1) {
				// apple
				this.generateEnemy(5);
				this.currentTime = 0;
			} else {
			}

		}

	}

  });