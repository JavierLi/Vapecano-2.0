var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

var guyWidth = 90;
var guyHeight = 90;
var guyNumFrames = 20;
var character1;
var character2;

function setupCharacter(game, x, y) {
    var character = game.add.sprite(x, y, 'guy');

    character.anchor.setTo(0.5, 0.5);

    game.add.existing(character);

    var right = character.animations.add('right', [5,6,7,8,9], 12, true);
    var idleRight = character.animations.add('rightIdle', [9], 12, false);

    var left = character.animations.add('left', [0,1,2,3,4], 12, true);
    var idleLeft = character.animations.add('leftIdle', [0], 12, false);

    var up = character.animations.add('up', [10,11,12,13,14], 12, true);
    var idleUp = character.animations.add('upIdle', [10], 12, false);

    var down = character.animations.add('down', [15,16,17,18,19], 12, true);
    var idleDown = character.animations.add('downIdle', [15], 12, false);

    left.enableUpdate = true;
    right.enableUpdate = true;

    game.physics.enable(character, Phaser.Physics.ARCADE);

    character.body.collideWorldBounds = true;
    //sets collision box
    character.body.setSize(38,20,20,10);

    return character;

};  

function preload() {
    game.load.spritesheet('guy', 'assets/zeldaspritesheet.png', guyWidth , guyHeight , guyNumFrames);
    game.load.image('background', 'assets/backg.png')
}

function create() {
    game.stage.backgroundColor ='#4dc3ff';

    // Create background and world bound.
    game.world.setBounds(0, 0, 800, 600);

    character2 = setupCharacter(game, 200, 300);
    character1 = setupCharacter(game, 600, 300);

    cursors = game.input.keyboard.createCursorKeys();
}   

    

function update() {
    game.physics.arcade.collide(character1)

    if (cursors.left.isDown)
    {
        character1.body.velocity.x = -100;
        character1.play('left');

    }
    else if (cursors.right.isDown)
    {
        character1.body.velocity.x = 100;
        character1.play('right');

    }
    else if (cursors.up.isDown)
    {
        character1.body.velocity.y = -100;
        character1.play('up');
   
    }
    else if (cursors.down.isDown)
    {
        character1.body.velocity.y = 100;
        character1.play('down');
   
    }
    else
    { 
        var nextIdle;

        if (character1.body.velocity.x < 0)
            nextIdle = "leftIdle";
        else if (character1.body.velocity.x > 0)
            nextIdle = "rightIdle"
        else if (character1.body.velocity.y < 0)
            nextIdle = "upIdle"
        else if(character1.body.velocity.y > 0)
            nextIdle = "downIdle"
        else 
            nextIdle = null;

        if (nextIdle != null)
            character1.play(nextIdle);

        character1.body.velocity.set(0);
        
    }
    
    game.physics.arcade.collide(character1, character2)
    
    
    var w = game.input.keyboard.addKey(Phaser.Keyboard.W);
    var a = game.input.keyboard.addKey(Phaser.Keyboard.A);
    var s = game.input.keyboard.addKey(Phaser.Keyboard.S);
    var d = game.input.keyboard.addKey(Phaser.Keyboard.D);
    

    if (a.isDown)
    {
        character2.body.velocity.x = -100;
        character2.play('left');
    }
    else if (d.isDown)
    {
        character2.body.velocity.x = 100;
        character2.play('right');
    }
    else if (w.isDown)
    {
        character2.body.velocity.y = -100;
        character2.play('up');
    }
    else if (s.isDown)
    {
        character2.body.velocity.y = 100;
        character2.play('down');
    }
    else
    {
        if (character2.body.velocity.x < 0)
            nextIdle = "leftIdle";
        else if (character2.body.velocity.x > 0)
            nextIdle = "rightIdle"
        else if (character2.body.velocity.y < 0)
            nextIdle = "upIdle"
        else if(character2.body.velocity.y > 0)
            nextIdle = "downIdle"
        else 
            nextIdle = null;

        if (nextIdle != null)
            character2.play(nextIdle);

        character2.body.velocity.set(0);   
    }
}