// the Game object used by the phaser.io library
var stateActions = { preload: preload, create: create, update: update };

var game = new Phaser.Game(700, 400, Phaser.AUTO, 'game', stateActions);
var score = 0;
var player;


//Loads all resources for the game and gives them names.
 function preload() {
    game.load.image("playerImg", "assets/FlappyAlexFace.png");
    game.load.audio("backgroundmusic", "assets/Numa.ogg");
    game.load.audio("woohoo", "assets/woohoo.ogg");
    game.load.audio("ouch", "assets/Ouch.ogg");
    game.load.image("pipe", "assets/pipe.png");
}

//Initialises the game. This function is only called once.
 function create() {
    game.add.audio("backgroundmusic");
    game.sound.play("backgroundmusic");
    game.add.audio("woohoo");
    game.add.audio("ouch");

    game.stage.setBackgroundColor("#58FAF4");
    game.add.text(100, 180, // coordinates
    "Welcome to FlappyAlex!", // text
        { font: "40px Elephant", // font size and typeface
        fill: ""} // text color
    );
    p1 = game.add.sprite(10, 10, "playerImg");
    p2 = game.add.sprite(10, 340, "playerImg");
    //p3 = game.add.sprite(650, 340, "playerImg");
    p4 = game.add.sprite(650, 10, "playerImg");

    //Our score section
    game.add.text(600, 340, // coordinates
        "Score", // text
        { font: "20px Elephant", // font size and typeface
            fill: ""} // text color
    );

    game.add.text(620, 340, // coordinates
        score, // text
        { font: "20px Elephant", // font size and typeface
            fill: ""} // text color
    );

    //Our player section
    var x = 50;
    var y = 50;
    player = game.add.sprite(x,y, "playerImg");

     //Our keyboard inputs
    game.input.onDown.add(clickHandler);
    game.input.keyboard
        .addKey(Phaser.Keyboard.SPACEBAR)
        .onDown.add(spaceHandler);
    game.input.keyboard
        .addKey(Phaser.Keyboard.RIGHT)
        .onDown.add(moveRight);
    game.input.keyboard
        .addKey(Phaser.Keyboard.LEFT)
        .onDown.add(moveLeft);
    game.input.keyboard
        .addKey(Phaser.Keyboard.UP)
        .onDown.add(moveUp);
    game.input.keyboard
        .addKey(Phaser.Keyboard.DOWN)
        .onDown.add(moveDown);

     //Pipes
/*
     for(var i = 0; i < 1000; i++){
             var gap = Math.floor(Math.random()*6);
             console.log(gap);
     }
     for(var i = 0; i < 1000; i++) {
         var gap2 = Math.floor(Math.random() * 6);
         console.log(gap2);
     }
     for(var count1x = 0; count1x<=gap; count1x++){
         game.add.sprite(300, 50 * count1x, "pipe");
     }

     for(var count1y = gap +3 ; count1y<=gap+10; count1y++){
         game.add.sprite(300, 50 * count1y, "pipe");
     }

     for(var count2x = 0; count2x<=gap2; count2x++){
         game.add.sprite(500, 50 * count2x, "pipe");
     }

     for(var count2y = gap2 +3 ; count2y<=gap2+10; count2y++){
         game.add.sprite(500, 50 * count2y, "pipe");
     }
*/


}

//Our movement functions
function clickHandler (event)
{
    var alex = game.add.sprite (event.x, event.y, "playerImg");
    game.sound.play("woohoo")
}
function moveLeft ()
{
  player.x = player.x - 10;
}
function moveRight (event)
{
    player.x = player.x + 10;
}
function moveDown ()
{
    player.y = player.y + 10;
}
function moveUp ()
{
    player.y = player.y - 10;
}
function spaceHandler (event) {
        game.add.text(72, 225, // coordinates
            "Do you dare play FlappyAlex?!", // text
            {
                font: "40px Elephant", // font size and typeface
                fill: ""
            } // text color
        );
        game.sound.play("ouch")
}
//This function updates the scene. It is called for every new frame.
function update()
{
}