const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: "FFFFFF",
    physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 },
          enableBody: true,
        }
    },
  scene:[MainScreen]
};

const game = new Phaser.Game(config);

let gameState = {               
   
}