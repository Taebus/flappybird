// the Game object used by the phaser.io library
var stateActions = { preload: preload, create: create, update: update };

var game = new Phaser.Game(700, 400, Phaser.AUTO, 'game', stateActions);
var score = 0;
var player;

/*
 * Loads all resources for the game and gives them names.
 */
function preload() {
    game.load.image("playerImg", "assets/FlappyAlexFace.png");
    game.load.audio("backgroundmusic", "assets/Numa.ogg");
    game.load.audio("woohoo", "assets/woohoo.ogg")
}

/*
 * Initialises the game. This function is only called once.
 */
function create() {
    game.add.audio("backgroundmusic");
    game.sound.play("backgroundmusic");
    game.add.audio("woohoo");
    game.stage.setBackgroundColor("#58FAF4");



    game.add.text(100, 180, // coordinates
    "Welcome to FlappyAlex!", // text
        { font: "40px Elephant", // font size and typeface
        fill: ""} // text color

    );

    p1 = game.add.sprite(10, 10, "playerImg");
    p2 = game.add.sprite(10, 340, "playerImg");
    p3 = game.add.sprite(650, 340, "playerImg");
    p4 = game.add.sprite(650, 10, "playerImg");

    var x = 50;
    var y = 50;
    player = game.add.sprite(x,y, "playerImg");

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


}


function clickHandler (event) {
    var alex = game.add.sprite (event.x, event.y, "playerImg");
    game.sound.play("woohoo")
    //game.add.tween(alex).to({angle: -30}, 1000).start();
    //game.add.tween(alex).to({angle: 0}, 1000).start();

/*

fjsdkfksljflkds
jfksdljflds

 */
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
        )



}
/*
 * This function updates the scene. It is called for every new frame.
 */
function update() {

}