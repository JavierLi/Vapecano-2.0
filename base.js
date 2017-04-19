var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

var guyWidth = 90;
var guyHeight = 90;
var guyNumFrames = 20;
var nextIdle = "leftIdle";

player = function (game, x, y) {
    
    Phaser.Sprite.call(this, game, x, y, 'guy');

};

player.prototype = Object.create(Phaser.Sprite.prototype);

player.prototype.constructor = player;

function preload() {
    
    game.load.spritesheet('guy', 'assets/zeldaspritesheet.png', guyWidth , guyHeight , guyNumFrames);
    game.load.image('background', 'assets/backg.png')
  

}

function create() {
    
//        game.stage.backgroundColor ='#4dc3ff';
    
        // Create background and world bound.
        game.add.tileSprite(0, 0, 1604, 600, 'background');
        game.world.setBounds(0, 0, 800, 600);

    
        /*player = game.add.sprite(0, 300, 'guy');
        player2 = game.add.sprite(300, 0, 'guy')

        var right = player.animations.add('right', [5,6,7,8,9], 12, true);
        var idleRight = player.animations.add('rightIdle', [9], 12, false);
    
        var left = player.animations.add('left', [0,1,2,3,4], 12, true);
        var idleLeft = player.animations.add('leftIdle', [0], 12, false);
    
        var up = player.animations.add('up', [10,11,12,13,14], 12, true);
        var idleUp = player.animations.add('upIdle', [10], 12, false);
    
        var down = player.animations.add('down', [15,16,17,18,19], 12, true);
        var idleDown = player.animations.add('downIdle', [15], 12, false);
        
    
    
        var right2 = player2.animations.add('right2', [5,6,7,8,9], 12, true);
        var left2 = player2.animations.add('left2', [0,1,2,3,4], 12, true);
        var up2 = player2.animations.add('up2', [10,11,12,13,14], 12, true);
        var down2 = player2.animations.add('down2', [15,16,17,18,19], 12, true);
    
        left.enableUpdate = true;
        right.enableUpdate = true;
    
        game.physics.enable(player, Phaser.Physics.ARCADE);
        game.physics.enable(player2, Phaser.Physics.ARCADE);

//        game.camera.follow(player);
    
        player.body.collideWorldBounds = true;
        player2.body.collideWorldBounds = true;*/

        var character1 = new player(game, 200, 300);
        character1.anchor.setTo(0.5,0.5);
    
        var character2 = new player(game, 600, 300);
        character2.anchor.setTo(0.5, 0.5);

        game.add.existing(character1);
        game.add.existing(character2);
    
        cursors = game.input.keyboard.createCursorKeys();
}   

    

function update() {
    
    /*game.physics.arcade.collide(character1, character2)

    character1.body.velocity.set(0);

    if (cursors.left.isDown)
    {
        character1.body.velocity.x = -100;
        character1.play('left');
        nextIdle = "leftIdle"
    }
    else if (cursors.right.isDown)
    {
        character1.body.velocity.x = 100;
        character1.play('right');
         nextIdle = "rightIdle"
    }
    else if (cursors.up.isDown)
    {
        character1.body.velocity.y = -100;
        character1.play('up');
         nextIdle = "upIdle"
    }
    else if (cursors.down.isDown)
    {
        character1.body.velocity.y = 100;
        character1.play('down');
         nextIdle = "downIdle"
    }
    else
    {
     character1.play(nextIdle);
    }
    
    
    // WASD to move camera. Can't move camera up and down right now because no space in tile Sprite.
    var w = game.input.keyboard.addKey(Phaser.Keyboard.W);
    var a = game.input.keyboard.addKey(Phaser.Keyboard.A);
    var s = game.input.keyboard.addKey(Phaser.Keyboard.S);
    var d = game.input.keyboard.addKey(Phaser.Keyboard.D);
    
    character2.body.velocity.set(0);

    if (a.isDown)
    {
        character2.body.velocity.x = -100;
        character2.play('left2');
    }
    else if (d.isDown)
    {
        character2.body.velocity.x = 100;
        character2.play('right2');
    }
    else if (w.isDown)
    {
        character2.body.velocity.y = -100;
        character2.play('up2');
    }
    else if (s.isDown)
    {
        character2.body.velocity.y = 100;
        character2.play('down2');
    }
    else
    {
        character2.animations.stop();
    }*/
    

    
//    if (s.isDown)
//    {
//        game.camera.y -= 4;
//    }
//    else if (w.isDown)
//    {
//        game.camera.y += 4;
//    }
//
//    if (a.isDown)
//    {
//        game.camera.x -= 4;
//    }
//    else if (d.isDown)
//    {
//        game.camera.x += 4;
//    }
//
//}
}