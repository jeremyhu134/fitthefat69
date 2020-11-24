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
        this.load.audio('iamfat','images/iamfat.mp3');
    }
    create() {
        gameState.code = "";
        codetext = nine = this.add.text( 100, 900, `Code : ${gameState.code}`, {fill: '#000000', fontSize: '100px'});
        gameState.gamecreated = false;
        one = this.add.text( 100, 100, `1`, {fill: '#000000', fontSize: '100px'}).setInteractive();
        two = this.add.text( 400, 100, `2`, {fill: '#000000', fontSize: '100px'}).setInteractive();
        three = this.add.text( 700, 100, `3`, {fill: '#000000', fontSize: '100px'}).setInteractive();
        four = this.add.text( 100, 400, `4`, {fill: '#000000', fontSize: '100px'}).setInteractive();
        five = this.add.text( 400, 400, `5`, {fill: '#000000', fontSize: '100px'}).setInteractive();
        six = this.add.text( 700, 400, `6`, {fill: '#000000', fontSize: '100px'}).setInteractive();
        seven = this.add.text( 100, 700, `7`, {fill: '#000000', fontSize: '100px'}).setInteractive();
        eight = this.add.text( 400, 700, `8`, {fill: '#000000', fontSize: '100px'}).setInteractive();
        nine = this.add.text( 700, 700, `9`, {fill: '#000000', fontSize: '100px'}).setInteractive();
        one.on('pointerdown', () => {
            gameState.code = gameState.code + "1";
            codetext.destroy();
            codetext = this.add.text( 100, 900, `Code : ${gameState.code}`, {fill: '#000000', fontSize: '100px'});
            if(gameState.code.length > 6){
                gameState.code = "";
            }
        });
        two.on('pointerdown', () => {
            gameState.code = gameState.code + "2";
            codetext.destroy();
            codetext = this.add.text( 100, 900, `Code : ${gameState.code}`, {fill: '#000000', fontSize: '100px'});
            if(gameState.code.length > 6){
                gameState.code = "";
            }
        });
        three.on('pointerdown', () => {
            gameState.code = gameState.code + "3";
            codetext.destroy();
            codetext = this.add.text( 100, 900, `Code : ${gameState.code}`, {fill: '#000000', fontSize: '100px'});
            if(gameState.code.length > 6){
                gameState.code = "";
            }
        });
        four.on('pointerdown', () => {
            gameState.code = gameState.code + "4";
            codetext.destroy();
            codetext = this.add.text( 100, 900, `Code : ${gameState.code}`, {fill: '#000000', fontSize: '100px'});
            if(gameState.code.length > 6){
                gameState.code = "";
            }
        });
        five.on('pointerdown', () => {
            gameState.code = gameState.code + "5";
            codetext.destroy();
            codetext = this.add.text( 100, 900, `Code : ${gameState.code}`, {fill: '#000000', fontSize: '100px'});
            if(gameState.code.length > 6){
                gameState.code = "";
            }
        });
        six.on('pointerdown', () => {
            gameState.code = gameState.code + "6";
            codetext.destroy();
            codetext = this.add.text( 100, 900, `Code : ${gameState.code}`, {fill: '#000000', fontSize: '100px'});
            if(gameState.code.length > 6){
                gameState.code = "";
            }
        });
        seven.on('pointerdown', () => {
            gameState.code = gameState.code + "7";
            codetext.destroy();
            codetext = this.add.text( 100, 900, `Code : ${gameState.code}`, {fill: '#000000', fontSize: '100px'});
            if(gameState.code.length > 6){
                gameState.code = "";
            }
        });
        eight.on('pointerdown', () => {
            gameState.code = gameState.code + "8";
            codetext.destroy();
            codetext = this.add.text( 100, 900, `Code : ${gameState.code}`, {fill: '#000000', fontSize: '100px'});
            if(gameState.code.length > 6){
                gameState.code = "";
            }
        });
        nine.on('pointerdown', () => {
            gameState.code = gameState.code + "9";
            codetext.destroy();
            codetext = this.add.text( 100, 900, `Code : ${gameState.code}`, {fill: '#000000', fontSize: '100px'});
            if(gameState.code.length > 6){
                gameState.code = "";
            }
        });
        gameState.createGame = function(scene){
            gameState.fatpoints = 0;
            text = scene.add.text( 100, 40, `Fat points : ${gameState.fatpoints}`, {fill: '#000000', fontSize: '40px'});
            gameState.iamfat = scene.sound.add('iamfat');
            gameState.joe = scene.add.image((window.innerWidth/2),(window.innerHeight/2), 'joepic').setScale(1).setInteractive();
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
            gameState.gamecreated = true;
        }
	}
    update(){
        if(gameState.gamecreated == false && gameState.code == 492758){
            one.destroy();
            two.destroy();
            three.destroy();
            four.destroy();
            five.destroy();
            six.destroy();
            seven.destroy();
            eight.destroy();
            nine.destroy();
            codetext.destroy();
            gameState.createGame(this);
        }
    }
}