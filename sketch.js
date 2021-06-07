var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var x=100 ;
var y=200;
var database;

var form, player, game;

var players,player1,player2;



function preload(){
 
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  
}
