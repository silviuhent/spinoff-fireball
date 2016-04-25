require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"NewScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, '645f39Y+bVC9J1b0BDVxnjw', 'NewScript');
// NewScript.js


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

cc._RFpop();
},{}]},{},["NewScript"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L0NvY29zQ3JlYXRvci9yZXNvdXJjZXMvYXBwLmFzYXIvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImFzc2V0cy9OZXdTY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzY0NWYzOVkrYlZDOUoxYjBCRFZ4bmp3JywgJ05ld1NjcmlwdCcpO1xuLy8gTmV3U2NyaXB0LmpzXG5cblxudmFyIEhlbGxvV29ybGRMYXllciA9IGNjLkxheWVyLmV4dGVuZCh7XG4gICAgc3ByaXRlOiBudWxsLFxuICAgIGN0b3I6IGZ1bmN0aW9uIGN0b3IoKSB7XG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAvLyAxLiBzdXBlciBpbml0IGZpcnN0XG4gICAgICAgIHRoaXMuX3N1cGVyKCk7XG5cbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgLy8gMi4gYWRkIGEgbWVudSBpdGVtIHdpdGggXCJYXCIgaW1hZ2UsIHdoaWNoIGlzIGNsaWNrZWQgdG8gcXVpdCB0aGUgcHJvZ3JhbVxuICAgICAgICAvLyAgICB5b3UgbWF5IG1vZGlmeSBpdC5cbiAgICAgICAgLy8gYXNrIHRoZSB3aW5kb3cgc2l6ZVxuICAgICAgICB2YXIgc2l6ZSA9IGNjLndpblNpemU7XG5cbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgLy8gMy4gYWRkIHlvdXIgY29kZXMgYmVsb3cuLi5cbiAgICAgICAgLy8gYWRkIGEgbGFiZWwgc2hvd3MgXCJIZWxsbyBXb3JsZFwiXG4gICAgICAgIC8vIGNyZWF0ZSBhbmQgaW5pdGlhbGl6ZSBhIGxhYmVsXG4gICAgICAgIC8vIHZhciBoZWxsb0xhYmVsID0gbmV3IGNjLkxhYmVsVFRGKFwiSGVsbG8gV29ybGRcIiwgXCJBcmlhbFwiLCAzOCk7XG4gICAgICAgIC8vICB2YXIgc2V0dGluZ3MgPSBuZXcgY2MuTGFiZWxUVEYoXCJTZXR0aW5nc1wiLCBcIkFyaWFsXCIsIDM4KTtcbiAgICAgICAgLy8gcG9zaXRpb24gdGhlIGxhYmVsIG9uIHRoZSBjZW50ZXIgb2YgdGhlIHNjcmVlblxuICAgICAgICAvLyAgaGVsbG9MYWJlbC54ID0gc2l6ZS53aWR0aCAvIDI7XG4gICAgICAgIC8vICBzZXR0aW5ncy54ID0gc2l6ZS53aWR0aCAvIDI7XG4gICAgICAgIC8vICBoZWxsb0xhYmVsLnkgPSBzaXplLmhlaWdodCAvIDIgKyAyNTA7XG4gICAgICAgIC8vICBzZXR0aW5ncy55ID0gc2l6ZS5oZWlnaHQgLyAyICsgMjAwO1xuICAgICAgICAvLyBhZGQgdGhlIGxhYmVsIGFzIGEgY2hpbGQgdG8gdGhpcyBsYXllclxuICAgICAgICAvLyB0aGlzLmFkZENoaWxkKGhlbGxvTGFiZWwsIDUpO1xuICAgICAgICAvLyB0aGlzLmFkZENoaWxkKHNldHRpbmdzLCA1KTtcbiAgICAgICAgLy8gY2MuZXZlbnRNYW5hZ2VyLmFkZExpc3RlbmVyKGV2ZW50TGlzdGVuZXIsIHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICAvLyBhZGQgXCJIZWxsb1dvcmxkXCIgc3BsYXNoIHNjcmVlblwiXG4gICAgICAgIC8vIHRoaXMuc3ByaXRlID0gbmV3IGNjLlNwcml0ZShyZXMuSGVsbG9Xb3JsZF9wbmcpO1xuICAgICAgICAvLyB0aGlzLnNwcml0ZS5hdHRyKHtcbiAgICAgICAgLy8geDogc2l6ZS53aWR0aCAvIDIsXG4gICAgICAgIC8vIHk6IHNpemUuaGVpZ2h0IC8gMlxuICAgICAgICAvLyB9KTtcbiAgICAgICAgLy9DcmVhdGUgbWVudSBpdGVtc1xuICAgICAgICB2YXIgbWVudV9pdGVtXzEgPSBjYy5NZW51SXRlbUZvbnQuY3JlYXRlKFwiUGxheVwiLCB0aGlzLnBsYXksIHRoaXMpO1xuICAgICAgICB2YXIgbWVudV9pdGVtXzIgPSBjYy5NZW51SXRlbUZvbnQuY3JlYXRlKFwiSGlnaHNjb3JlXCIsIHRoaXMuaGlnaHNjb3JlLCB0aGlzKTtcbiAgICAgICAgdmFyIG1lbnVfaXRlbV8zID0gY2MuTWVudUl0ZW1Gb250LmNyZWF0ZShcIlNldHRpbmdzXCIsIHRoaXMuc2V0dGluZ3MsIHRoaXMpO1xuXG4gICAgICAgIG1lbnVfaXRlbV8xLnNldFBvc2l0aW9uKGNjLnAoc2l6ZS53aWR0aCAvIDIsIHNpemUuaGVpZ2h0IC8gNCAqIDMpKTtcbiAgICAgICAgbWVudV9pdGVtXzIuc2V0UG9zaXRpb24oY2MucChzaXplLndpZHRoIC8gMiwgc2l6ZS5oZWlnaHQgLyA0ICogMikpO1xuICAgICAgICBtZW51X2l0ZW1fMy5zZXRQb3NpdGlvbihjYy5wKHNpemUud2lkdGggLyAyLCBzaXplLmhlaWdodCAvIDQgKiAxKSk7XG4gICAgICAgIC8vY3JlYXRlIG1lbnVcbiAgICAgICAgdmFyIG1lbnUgPSBjYy5NZW51LmNyZWF0ZShtZW51X2l0ZW1fMSwgbWVudV9pdGVtXzIsIG1lbnVfaXRlbV8zKTtcbiAgICAgICAgbWVudS5zZXRQb3NpdGlvbihjYy5wKDAsIDApKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZChtZW51KTtcbiAgICAgICAgLy90aGlzLmFkZENoaWxkKHRoaXMuc3ByaXRlLCAwKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIHBsYXk6IGZ1bmN0aW9uIHBsYXkoKSB7XG4gICAgICAgIGNjLmxvZyhcIlBsYXkgR2FtZVwiKTtcbiAgICB9LFxuICAgIGhpZ2hzY29yZTogZnVuY3Rpb24gaGlnaHNjb3JlKCkge1xuICAgICAgICBjYy5sb2coXCJIaWdoIHNjb3Jlc1wiKTtcbiAgICB9LFxuICAgIHNldHRpbmdzOiBmdW5jdGlvbiBzZXR0aW5ncygpIHtcbiAgICAgICAgY2MubG9nKFwiU2V0dGluZ3NcIik7XG4gICAgfVxufSk7XG5cbnZhciBIZWxsb1dvcmxkU2NlbmUgPSBjYy5TY2VuZS5leHRlbmQoe1xuICAgIG9uRW50ZXI6IGZ1bmN0aW9uIG9uRW50ZXIoKSB7XG4gICAgICAgIHRoaXMuX3N1cGVyKCk7XG4gICAgICAgIHZhciBsYXllciA9IG5ldyBIZWxsb1dvcmxkTGF5ZXIoKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZChsYXllcik7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyJdfQ==
