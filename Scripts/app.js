/*
Filename : App.js
@author Aayushi Shah
@date August 17,2016
StudentID : 300874124
website : http://comp125-finalexam-300874124.azurewebsites.net/
@description : This file is the main javascript file for this web site
*/
var core;
(function (core) {
    "use strict";
    var canvas;
    var stage;
    // app entry function
    function init() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);
        main();
    }
    function gameLoop() {

        stage.update();
    }
    function main() {
       var button1 = new createjs.Bitmap("../Assets/images/blank.png")
        stage.addChild(button1);
        var button2 = new createjs.Bitmap("../Assets/images/blank.png")
        stage.addChild(button2);
        var Dice1 = new createjs.Bitmap("../Assets/images/1.png");
        stage.addChild(Dice1);
        var Dice2 = new createjs.Bitmap("../Assets/images/2.png");
        stage.addChild(Dice2);
        var Dice3 = new createjs.Bitmap("../Assets/images/3.png");
        stage.addChild(Dice3);
        var Dice4 = new createjs.Bitmap("../Assets/images/4.png");
        stage.addChild(Dice4);
        var Dice5 = new createjs.Bitmap("../Assets/images/5.png");
        stage.addChild(Dice5);
        var Dice6 = new createjs.Bitmap("../Assets/images/6.png");
        stage.addChild(Dice6);
        button1.x=107.5;
        button1.y=105;
        button2.x=352.5;
        button2.y=105;
        Dice1.x = 352.5;
        Dice1.y = 105;
        Dice2.x = 352.5;
        Dice2.y = 105;
        Dice3.x = 352.5;
        Dice3.y = 105;
        Dice4.x = 352.5;
        Dice4.y = 105;
        Dice5.x = 352.5;
        Dice5.y = 105;
        Dice6.x = 352.5;
        Dice6.y = 105;
        //label object
         
        //button bitmap
        
       var rollButton = new createjs.Bitmap("../Assets/images/rollButton.png");
        stage.addChild(rollButton);
        rollButton.x=250;
        rollButton.y=350;
    }

    function roll(){
        console.log("clicked");
        var randomNumber = Math.floor(Math.random()* 6);
    }
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map