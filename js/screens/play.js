game.PlayScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */

	resetGame : function () {
        this.reset()
	},
    onResetEvent: function() {
        const WIDTH = 640;
        //me.game.world.addChild(new me.ColorLayer("background", "#03a9f4"), 0);

        me.game.world.addChild(new me.ImageLayer(0, 0, {
            image:"bg1",
            repeat :"repeat-x"
        }), 0);

        // adding a player
        this.player = me.pool.pull("player", 100, 100);
        me.game.world.addChild(this.player, 1);

        //this.enemyManager = new game.EnemyManager();
       // this.enemyManager.generateEnemy();
       // me.game.world.addChild(this.enemyManager,2);
	this.enemyManager = me.pool.pull("enemyManager", 0, 0);
        me.game.world.addChild(this.enemyManager, 2);

        game.data.score = 0;
        this.HUD = new game.HUD.Container();
        me.game.world.addChild(this.HUD);


        me.input.bindKey(me.input.KEY.UP, "up");
        me.input.bindKey(me.input.KEY.DOWN, "down");
        me.input.bindKey(me.input.KEY.W, "up");
        me.input.bindKey(me.input.KEY.S, "down");
    },

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
        me.input.unbindKey(me.input.KEY.UP);
        me.input.unbindKey(me.input.KEY.DOWN);
        me.input.unbindKey(me.input.KEY.W);
        me.input.unbindKey(me.input.KEY.S);
        me.game.world.removeChild(this.HUD);
        me.game.world.removeChild(this.player);
        me.game.world.removeChild(this.enemyManager);
    }
});
