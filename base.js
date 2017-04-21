var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

var guyWidth = 90;
var guyHeight = 90;
var guyNumFrames = 20;
var nextIdle = "leftIdle";
var character1;
var character2;

    MyPlayer = function (game, x, y) {

        Phaser.Sprite.call(this, game, x, y, 'guy');
        
        this.anchor.setTo(0.5, 0.5);
        
        game.add.existing(this);
        
        var right = this.animations.add('right', [5,6,7,8,9], 12, true);
        var idleRight = this.animations.add('rightIdle', [9], 12, false);
    
        var left = this.animations.add('left', [0,1,2,3,4], 12, true);
        var idleLeft = this.animations.add('leftIdle', [0], 12, false);
    
        var up = this.animations.add('up', [10,11,12,13,14], 12, true);
        var idleUp = this.animations.add('upIdle', [10], 12, false);
    
        var down = this.animations.add('down', [15,16,17,18,19], 12, true);
        var idleDown = this.animations.add('downIdle', [15], 12, false);
    
        left.enableUpdate = true;
        right.enableUpdate = true;
    
        game.physics.enable(this, Phaser.Physics.ARCADE);
    
        this.body.collideWorldBounds = true;
    };  

   

    MyPlayer.prototype = Object.create(Phaser.Sprite.prototype);

    MyPlayer.prototype.constructor = MyPlayer;

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

        character1 = new MyPlayer(game, 200, 300);
        character2 = new MyPlayer(game, 600, 300);
        
    
        var character3 = new MyPlayer(game, 400, 300);
    
        cursors = game.input.keyboard.createCursorKeys();
}   

    

function update() {
    
    game.physics.arcade.collide(character1)
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
    
    game.physics.arcade.collide(character1, character2)
    
    
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
    }
    

}