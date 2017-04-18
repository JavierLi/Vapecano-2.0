var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

var guyWidth = 90;
var guyHeight = 90;
var guyNumFrames = 20;
var player;
var nextIdle = "leftIdle";

function preload() {
    
    game.load.spritesheet('guy', 'assets/zeldaspritesheet.png', guyWidth , guyHeight , guyNumFrames);
    game.load.image('background', 'assets/backg.png')
  

}

function create() {
    
//        game.stage.backgroundColor ='#4dc3ff';
    
        // Create background and world bound.
        game.add.tileSprite(0, 0, 1604, 600, 'background');
        game.world.setBounds(0, 0, 1604, 600);

    
        player = game.add.sprite(0, 300, 'guy');
        var right = player.animations.add('right', [5,6,7,8,9], 12, true);
        var idleRight = player.animations.add('rightIdle', [9], 12, false);
    
        var left = player.animations.add('left', [0,1,2,3,4], 12, true);
        var idleLeft = player.animations.add('leftIdle', [0], 12, false);
    
        var up = player.animations.add('up', [10,11,12,13,14], 12, true);
        var idleUp = player.animations.add('upIdle', [10], 12, false);
    
        var down = player.animations.add('down', [15,16,17,18,19], 12, true);
        var idleDown = player.animations.add('downIdle', [15], 12, false);
        
    
    
        left.enableUpdate = true;
        right.enableUpdate = true;
    
        game.physics.enable(player, Phaser.Physics.ARCADE);

//        game.camera.follow(player);
    
        player.body.collideWorldBounds = true;

        cursors = game.input.keyboard.createCursorKeys();
}   

    

function update() {

    player.body.velocity.set(0);

    if (cursors.left.isDown)
    {
        player.body.velocity.x = -100;
        player.play('left');
        nextIdle = "leftIdle"
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 100;
        player.play('right');
         nextIdle = "rightIdle"
    }
    else if (cursors.up.isDown)
    {
        player.body.velocity.y = -100;
        player.play('up');
         nextIdle = "upIdle"
    }
    else if (cursors.down.isDown)
    {
        player.body.velocity.y = 100;
        player.play('down');
         nextIdle = "downIdle"
    }
    else
    {
     player.play(nextIdle);
    }

    // WASD to move camera. Can't move camera up and down right now because no space in tile Sprite.
    var w = game.input.keyboard.addKey(Phaser.Keyboard.W);
    var a = game.input.keyboard.addKey(Phaser.Keyboard.A);
    var s = game.input.keyboard.addKey(Phaser.Keyboard.S);
    var d = game.input.keyboard.addKey(Phaser.Keyboard.D);
    
    if (s.isDown)
    {
        game.camera.y -= 4;
    }
    else if (w.isDown)
    {
        game.camera.y += 4;
    }

    if (a.isDown)
    {
        game.camera.x -= 4;
    }
    else if (d.isDown)
    {
        game.camera.x += 4;
    }

}