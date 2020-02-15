
/* Game namespace */
var game = {

    // an object where to store game information
    data : {
        // score
        score : 0,
        timer : 0
    },


    // Run on page load.
    "onload" : function () {
        // Initialize the video.
        if (!me.video.init(960, 640, {wrapper : "screen", scale : "auto"})) {
            alert("Your browser does not support HTML5 canvas.");
            return;
        }

        // Initialize the audio.
        me.audio.init("mp3,ogg");

        // set and load all resources.
        // (this will also automatically switch to the loading screen)
        me.loader.preload(game.resources, this.loaded.bind(this));
    },

    // Run on game resources loaded.
    "loaded" : function () {
        me.pool.register("player", game.Player);
        me.pool.register("oilspill", game.OilSpill);
        me.pool.register("bag", game.Bag);
        me.pool.register("net", game.Net);
        me.pool.register("ring", game.Ring);
        me.pool.register("apple", game.Apple);
        me.pool.register("enemyManager", game.EnemyManager);
        
        // set the "Play/Ingame" Screen Object
        me.state.set(me.state.PLAY, new game.PlayScreen());
        me.state.set(me.state.GAME_END, new game.EndTitleScreen());
        me.state.set(me.state.START, new game.TitleScreen());

        // start the game
        me.state.change(me.state.START);
    }
};
