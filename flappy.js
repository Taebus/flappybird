// the Game object used by the phaser.io library
var stateActions = { preload: preload, create: create, update: update };

var game = new Phaser.Game(700, 400, Phaser.AUTO, 'game', stateActions);
var score = 0;
var player;
var pipes;

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

    pipes=game.add.group();
    game.time.events.loop(2*Phaser.Timer.SECOND, generate_pipes);

    /*

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
*/

     //Our keyboard inputs
    //game.input.onDown.add(clickHandler);
    game.input.keyboard
        .addKey(Phaser.Keyboard.SPACEBAR)
        .onDown.add(player_jump);
    /*game.input.keyboard
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
*/

     //Physics
     game.physics.startSystem(Phaser.Physics.ARCADE);


     /*for(var i = 0; i < 1000; i++){
             var gap = Math.floor(Math.random()*6);
             console.log(gap);
     }
     for(var i = 0; i < 1000; i++) {
         var gap2 = Math.floor(Math.random() * 6);
         console.log(gap2);
     }
     for(var count1x = 0; count1x<=gap; count1x++){
         //game.add.sprite(250, 50 * count1x, "pipe");
         add_pipe_part(pipe_offset, i*pipe_size, "pipe");
     }

var

     for(var count1y = gap +3 ; count1y<=gap+10; count1y++){
         game.add.sprite(250, 50 * count1y, "pipe");
     }

     for(var count2x = 0; count2x<=gap2; count2x++){
         game.add.sprite(500, 50 * count2x, "pipe");
     }

     for(var count2y = gap2 +3 ; count2y<=gap2+10; count2y++){
         game.add.sprite(500, 50 * count2y, "pipe");
     }
*/
//Our player section
     var x = 100;
     var y = 200;
     player = game.add.sprite(x, y,"playerImg");
     game.physics.arcade.enable(player);
     player.anchor.setTo(0.5,0.5);
     player.checkWorldBounds = true;

     //player.body.velocity.y = -200;

     player.body.velocity.x = 0;

     player.body.gravity.y=200;

     pipes = game.add.group();
 }

function player_jump(){
    player.body.velocity.y=-130;
}

function generate_pipes(){
    var hole = Math.floor(Math.random()*5+1);
    var pipe_offset=800;
    var i;
    for (i=0; i < hole; i++){
        add_pipe_part(pipe_offset, i*50, "pipe");
    }
    for(i=hole + 2; i <8; i++){add_pipe_part(pipe_offset, i * 50, "pipe");
    }
}

function add_pipe_part(x,y,pipe_part) {
    var pipe = pipes.create(x , y, pipe_part);
    game.physics.arcade.enable(pipe);
    pipe.body.velocity.x = -200; //game velocity
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

/*function spaceHandler (event) {
        game.add.text(72, 225, // coordinates
            "Do you dare play FlappyAlex?!", // text
            {
                font: "40px Elephant", // font size and typeface
                fill: ""
            } // text color
        );
        game.sound.play("ouch")
*/
}
//This function updates the scene. It is called for every new frame.
function update()
{
}