var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

var guyWidth = 90;
var guyHeight = 90;
var guyNumFrames = 20;

function preload() {
    
    game.load.spritesheet('guy', 'assets/oorjG.png', guyWidth , guyHeight , guyNumFrames);
  

}

function create() {
    
        game.stage.backgroundColor ='#4dc3ff';

        var sprite = game.add.sprite(0, 0, 'guy');
        var right = sprite.animations.add('right', [5,6,7,8,9], 12, true);
        sprite.animations.play('right', 12, true);


}

function update() {
}

