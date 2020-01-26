game.EndTitleScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */
	resetGame : function () {
        this.reset()
        me.state.change(me.state.PLAY);
	},
	
    onResetEvent: function() {
        const WIDTH = 640;
        //me.game.world.addChild(new me.ColorLayer("background", "#03a9f4"), 0);

        me.game.world.addChild(new me.ImageLayer(0, 0, {
            image:"game_over",
            repeat :"repeat-x"
        }), 0);

        // adding a player
        this.HUD = new game.HUD.Container();
        me.game.world.addChild(this.HUD);
        me.input.bindKey(me.input.KEY.ENTER, "enter");
    },

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
        me.input.unbindKey(me.input.KEY.ENTER);
        me.game.world.removeChild(this.HUD);
    }
});