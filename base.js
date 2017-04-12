var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

var guyWidth = 90;
var guyHeight = 90;
var guyNumFrames = 20;
var player;

function preload() {
    
    game.load.spritesheet('guy', 'assets/zeldaspritesheet.png', guyWidth , guyHeight , guyNumFrames);
  

}

function create() {
    
        game.stage.backgroundColor ='#4dc3ff';

        player = game.add.sprite(0, 0, 'guy');
        var right = player.animations.add('right', [5,6,7,8,9], 12, true);
        
        var left = player.animations.add('left', [0,1,2,3,4], 12, true);
    
        var up = player.animations.add('up', [10,11,12,13,14], 12, true);
        var down = player.animations.add('down', [15,16,17,18,19], 12, true);
    
        left.enableUpdate = true;
        right.enableUpdate = true;
    
        game.physics.enable(player, Phaser.Physics.ARCADE);

        game.camera.follow(player);

        cursors = game.input.keyboard.createCursorKeys();
}   

    

function update() {

    player.body.velocity.set(0);

    if (cursors.left.isDown)
    {
        player.body.velocity.x = -100;
        player.play('left');
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 100;
        player.play('right');
    }
    else if (cursors.up.isDown)
    {
        player.body.velocity.y = -100;
        player.play('up');
    }
    else if (cursors.down.isDown)
    {
        player.body.velocity.y = 100;
        player.play('down');
    }
    else
    {
        player.animations.stop();
    }

}
