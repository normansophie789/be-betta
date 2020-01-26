/**
 * a HUD container and child items
 */

game.HUD = game.HUD || {};


game.HUD.Container = me.Container.extend({

    init: function() {
        // call the constructor
        this._super(me.Container, 'init');

        // persistent across level change
        this.isPersistent = true;

        // make sure we use screen coordinates
        this.floating = true;

        // give a name
        this.name = "HUD";

        // add our child score object at the top left corner
        this.addChild(new game.HUD.ScoreItem(5, 5, { height: 10, width: 10 }));
    }
});


/**
 * a basic HUD item to display score
 */
game.HUD.ScoreItem = me.Renderable.extend({
    /**
     * constructor
     */
    init: function(x, y, settings) {

        // call the parent constructor
        // (size does not matter here)
        this._super(me.Renderable, 'init', [x, y, settings.width, settings.height]);
        this.font = new me.BitmapFont(me.loader.getBinary('PressStart2P'), me.loader.getImage('PressStart2P'));

        this.font.textAlign = "right";
        this.font.textBaseline = "bottom";
        // local copy of the global score
        this.score = 0;
    },

    /**
     * update function
     */
    update : function (dt) {
        // we don't do anything fancy here, so just
        // return true if the score has been updated
        if(me.state.isCurrent(me.state.PLAY)){
            game.data.timer ++;

            if (game.data.timer >= 10) {
                game.data.score ++;
                game.data.timer = 0
            }
        }

        if (this.score !== game.data.score) {
            this.score = game.data.score;
            console.log("updated");
            return true;
        } 
        if (me.input.isKeyPressed("enter")) {
            me.state.change(me.state.PLAY);
        }
        return false;
    },

    /**
     * draw the score
     */
    draw : function (renderer) {
       
		this.font.draw(renderer, "Score: " + game.data.score , me.game.viewport.width + (this.pos.x * -2), me.game.viewport.height + (this.pos.y * -5));
      

        game.data.timer ++;

        if (game.data.timer >= 10) {
            game.data.score ++;
            game.data.timer = 0
        }
    }

});
