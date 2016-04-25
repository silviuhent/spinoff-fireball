var playGame = false;
var SpinoffGame = cc.Layer.extend({
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
		// //Create menu items
		// var menu_item_1 = cc.MenuItemFont.create("Play", this.play, this);
		// var menu_item_2 = cc.MenuItemFont.create("Highscore", this.highscore, this);
		// var menu_item_3 = cc.MenuItemFont.create("Settings", this.settings, this);
		
		// menu_item_1.setPosition(cc.p(size.width / 2, (size.height / 4) * 3));
		// menu_item_2.setPosition(cc.p(size.width / 2, (size.height / 4) * 2));
		// menu_item_3.setPosition(cc.p(size.width / 2, (size.height / 4) * 1));
		// //create menu
		// var menu = cc.Menu.create(menu_item_1,menu_item_2,menu_item_3);
		// menu.setPosition(cc.p(0,0));
		// this.addChild(menu);
        //this.addChild(this.sprite, 0);
		var helloLabel = new cc.LabelTTF("SEE MY BALL???? HUHH?!?! Can ya'?", "Arial", 38);
		helloLabel.x = size.width / 2;
		helloLabel.y = size.height / 2 + 250;
		this.addChild(helloLabel, 5);
		//add image sprite	
		this.ball = new cc.Sprite(res.balls);
        this.ball.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.ball, 0);
		//move ball the 7 parameter refers to time
		
			var ball_action = cc.EaseBounceOut.create(cc.MoveBy.create(7, cc.p(250, -180)));
			this.ball.runAction(ball_action);
		
		var menu_item_1 = cc.MenuItemFont.create("Go Back BITZCH!", this.back, this);
		var menu = cc.Menu.create(menu_item_1);
		menu.alignItemsVertically();
		this.addChild(menu);
        return true;
    },
	back: function(){
		playGame = false;
		var scene = cc.Scene.create();
		var layer = new SpinoffHomeScene();
		scene.addChild(layer);
		cc.director.pushScene(cc.TransitionFade.create(1,scene));
	}
});

var SpinoffGameScene = cc.Scene.extend({
    onEnter:function () {
		if(false == playGame){
			playGame = true;
			this._super();
			var layer = new SpinoffGame();
			this.addChild(layer);
		}
    }
});

