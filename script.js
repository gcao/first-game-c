function preload() {
  this.load.image('player', 'assets/repl.png');
  this.load.image('peepoo', 'assets/p2.png');
}

function create() {
  this.player = this.physics.add.image(config.width * Math.random(), config.height * Math.random(), 'player').setScale(0.25, 0.25);
  this.player.setCollideWorldBounds(true);
  this.player.setBounce(1);
  this.playerVelocityX = (Math.random() - 0.5) * 320;
  this.player.setVelocityX(this.playerVelocityX);
  this.playerVelocityY = (Math.random() - 0.5) * 320;
  this.player.setVelocityY(this.playerVelocityY);

  this.peepoo = this.physics.add.image(config.width * Math.random(), config.height * Math.random(), 'peepoo').setScale(0.25, 0.25);
  this.peepoo.setCollideWorldBounds(true);
  this.peepoo.setBounce(1);
  this.peepooVelocityX = (Math.random() - 0.5) * 320;
  this.peepoo.setVelocityX(this.peepooVelocityX);
  this.peepooVelocityY = (Math.random() - 0.5) * 320;
  this.peepoo.setVelocityY(this.peepooVelocityY);

  this.physics.add.collider(this.player, this.peepoo);

  this.spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

  this.red = 0
  this.green = 0
  this.blue = 0

  this.cameras.main.backgroundColor.setTo(this.red, this.green, this.blue);

  this.time.addEvent({
    delay: 50,
    loop: true,
    callback: () => {
      this.red += 1;
      this.green += 1;
      this.blue += 1;
      if (this.red > 255) {
        this.red = 0;
      }
      if (this.green > 255) {
        this.green = 0;
      }
      if (this.blue > 255) {
        this.blue = 0;
      }

      this.cameras.main.backgroundColor.setTo(this.red, this.green, this.blue);
    },
  });
}

function update() {
  if (this.spaceBar.isDown) {
    if (this.paused) {
      this.paused = false
      this.player.setVelocityX(this.playerVelocityX);
      this.player.setVelocityY(this.playerVelocityY);

      this.player.setVelocityX(this.playerVelocityX);
      this.player.setVelocityY(this.playerVelocityY);

      this.peepoo.setVelocityX(this.peepooVelocityX);
      this.peepoo.setVelocityY(this.peepooVelocityY);

      this.peepoo.setVelocityX(this.peepooVelocityX);
      this.peepoo.setVelocityY(this.peepooVelocityY);
    } else {
      this.paused = true
      this.playerVelocityX = this.player.body.velocity.x;
      this.playerVelocityY = this.player.body.velocity.y;
      this.player.setVelocityX(0);
      this.player.setVelocityY(0);

      this.peepooVelocityX = this.peepoo.body.velocity.x;
      this.peepooVelocityY = this.peepoo.body.velocity.y;
      this.peepoo.setVelocityX(0);
      this.peepoo.setVelocityY(0);
    }
  }


}


const config = {
  type: Phaser.AUTO,
  width: 500,
  height: 400,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 0
      },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};


const game = new Phaser.Game(config);