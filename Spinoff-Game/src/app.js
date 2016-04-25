var initialMenu = false;
var SpinoffHome = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;
		//Create menu items
		var menu_item_1 = cc.MenuItemFont.create("Play", this.play, this);
		var menu_item_2 = cc.MenuItemFont.create("Highscore", this.highscore, this);
		var menu_item_3 = cc.MenuItemFont.create("Settings", this.settings, this);
		
		menu_item_1.setPosition(cc.p(size.width / 2, (size.height / 4) * 3));
		menu_item_2.setPosition(cc.p(size.width / 2, (size.height / 4) * 2));
		menu_item_3.setPosition(cc.p(size.width / 2, (size.height / 4) * 1));
		//create menu
		var menu = cc.Menu.create(menu_item_1,menu_item_2,menu_item_3);
		menu.setPosition(cc.p(0,0));
		this.addChild(menu);
        //this.addChild(this.sprite, 0);
		//cc.TransitionJumpZoom
        return true;
    },
	play: function(){
		initialMenu = false;
		var scene = cc.Scene.create();
		var layer = new SpinoffGameScene();
		scene.addChild(layer);
		cc.director.pushScene(cc.TransitionZoomFlipY.create(1,scene));
	},
	highscore: function(){
		alert("High scores");
	},
	settings: function(){
		alert("Settings");
	},
});

var SpinoffHomeScene = cc.Scene.extend({
    onEnter:function () {
		if(false == initialMenu){
			initialMenu = true;
			this._super();
			var layer = new SpinoffHome();
			this.addChild(layer);
		}
    }
});

