var text;
var caketext;
var one;
var two;
var three;
var four;
var five;
var six;
var seven;
var eight;
var nine;
var codetext;


class MainScreen extends Phaser.Scene {
    constructor() {
		super({ key: 'MainScreen' })
	}
    preload(){
        this.load.image('joepic','images/joe.png');
        this.load.image('cake','https://lh3.googleusercontent.com/proxy/1-gSqoTqM5dCd1XD54UpXtmBm3Zh3aSiVKupg2ATQUEkMlYL0aHyzuLj0QvxGq01E5skzkQC4FrIRv-5IRl1HA7z');
        this.load.audio('iamfat','images/iamfat.mp3');
    }
    create() {
        codetext = nine = this.add.text( 100, 900, `Code : ${gameState.code}`, {fill: '#000000', fontSize: '100px'});
        gameState.createGame = function(scene){
            gameState.fatpoints = 0;
            text = scene.add.text( 100, 40, `Fat points : ${gameState.fatpoints}`, {fill: '#000000', fontSize: '40px'});
            gameState.iamfat = scene.sound.add('iamfat');
            gameState.joe = scene.add.image((window.innerWidth/2),(window.innerHeight/2), 'joepic').setScale(1).setInteractive();
            gameState.chochcake = scene.add.image(window.innerWidth-100,(window.innerHeight/2), 'cake').setScale(0.3).setInteractive();
            gameState.joe.on('pointerdown', () => {
                gameState.fatpoints += 1;
                text.destroy();
                text = scene.add.text( 100, 40, `Fat points : ${gameState.fatpoints}`, {fill: '#000000', fontSize: '40px'});
                if(!gameState.iamfat.isPlaying){
                    gameState.iamfat.play();  
                }
                if(gameState.fatpoints%20 == 0){
                    gameState.random = Math.ceil(Math.random()*3);
                    if(gameState.random == 1){
                        caketext = scene.add.text( gameState.joe.x + 110, gameState.joe.y -200, `I LOVE EATING!`, {fill: '#000000', fontSize: '20px'});
                    }
                    else if(gameState.random == 2){
                        caketext = scene.add.text( gameState.joe.x + 110, gameState.joe.y -200, `KEEP FEEDING ME!`, {fill: '#000000', fontSize: '20px'});
                    }
                    else {
                        caketext = scene.add.text( gameState.joe.x + 110, gameState.joe.y -200, `YUM YUM YUM!`, {fill: '#000000', fontSize: '20px'});
                    }
                    scene.time.addEvent({
                        delay: 2000,
                        callback: ()=>{
                            caketext.destroy();
                        },
                        startAt: 0,
                        timeScale: 1,
                    });
                }
            });
            gameState.caketalk =  0;
            gameState.chochcake.on('pointerdown', () => {
                if(caketext){
                    caketext.destroy();
                }
                gameState.caketalk += 1;
                if(gameState.caketalk == 1){
                    caketext = scene.add.text( gameState.chochcake.x - 250, gameState.chochcake.y -100, `I think that fatso wants \nto eat me...`, {fill: '#000000', fontSize: '20px'});
                }
                else if(gameState.caketalk == 2){
                    caketext = scene.add.text( gameState.chochcake.x - 250, gameState.chochcake.y -100, `Please don't feed me\n to him!`, {fill: '#000000', fontSize: '20px'});
                }
                else if(gameState.caketalk == 3){
                    caketext = scene.add.text( gameState.chochcake.x - 250, gameState.chochcake.y -100, `NO... NOOOOO!`, {fill: '#000000', fontSize: '20px'});
                }
                else if(gameState.caketalk == 4){
                    gameState.chochcake.destroy();
                    caketext = scene.add.text( gameState.joe.x + 110, gameState.joe.y -200, `THAT CAKE WAS DELICIOUS!`, {fill: '#000000', fontSize: '20px'});
                    gameState.fatpoints += 10000;
                    text.destroy();
                    text = scene.add.text( 100, 40, `Fat points : ${gameState.fatpoints}`, {fill: '#000000', fontSize: '40px'});
                }
            });
            gameState.gamecreated = true;
        }
        gameState.createGame(this);
	}
    update(){
        
    }
}