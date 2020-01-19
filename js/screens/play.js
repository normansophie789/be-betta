game.PlayScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */

	resetGame : function () {
        this.reset()
	},
    onResetEvent: function() {
        const WIDTH = 640;
        me.game.world.addChild(new me.ColorLayer("background", "#03a9f4"), 0);

        // adding a player
        this.player = me.pool.pull("player", 50, 50);
        me.game.world.addChild(this.player, 1);

    
        me.game.world.addChild(me.pool.pull("enemyManager", 0, 0, 3000.0, 200), 2);

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
    }
});