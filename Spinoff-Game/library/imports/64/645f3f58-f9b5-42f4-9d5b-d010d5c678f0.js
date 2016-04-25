
var HelloWorldLayer = cc.Layer.extend({
    sprite: null,
    ctor: function ctor() {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        // var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
        //  var settings = new cc.LabelTTF("Settings", "Arial", 38);
        // position the label on the center of the screen
        //  helloLabel.x = size.width / 2;
        //  settings.x = size.width / 2;
        //  helloLabel.y = size.height / 2 + 250;
        //  settings.y = size.height / 2 + 200;
        // add the label as a child to this layer
        // this.addChild(helloLabel, 5);
        // this.addChild(settings, 5);
        // cc.eventManager.addListener(eventListener, this.settings);
        // add "HelloWorld" splash screen"
        // this.sprite = new cc.Sprite(res.HelloWorld_png);
        // this.sprite.attr({
        // x: size.width / 2,
        // y: size.height / 2
        // });
        //Create menu items
        var menu_item_1 = cc.MenuItemFont.create("Play", this.play, this);
        var menu_item_2 = cc.MenuItemFont.create("Highscore", this.highscore, this);
        var menu_item_3 = cc.MenuItemFont.create("Settings", this.settings, this);

        menu_item_1.setPosition(cc.p(size.width / 2, size.height / 4 * 3));
        menu_item_2.setPosition(cc.p(size.width / 2, size.height / 4 * 2));
        menu_item_3.setPosition(cc.p(size.width / 2, size.height / 4 * 1));
        //create menu
        var menu = cc.Menu.create(menu_item_1, menu_item_2, menu_item_3);
        menu.setPosition(cc.p(0, 0));
        this.addChild(menu);
        //this.addChild(this.sprite, 0);

        return true;
    },
    play: function play() {
        cc.log("Play Game");
    },
    highscore: function highscore() {
        cc.log("High scores");
    },
    settings: function settings() {
        cc.log("Settings");
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter: function onEnter() {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});