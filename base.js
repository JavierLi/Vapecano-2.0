var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

function preload() {
    
    game.load.spritesheet('guy', 'assets/walkingss.png', 281.5, 346, 8);
    game.load.image('background', 'assets/white.png')

}

function create() {
    
        game.add.tileSprite(0, 0, 800, 600, 'background');

        var sprite = game.add.sprite(0, 0, 'guy');
        sprite.animations.add('walk');
        sprite.animations.play('walk', 10, true);


}

function update() {
}

