var canvas;
var gameState;
var contestantCount;
var database;
var quiz, question, contestant;

var gameState = 0;
var playerCount=0;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
 
  if(playerCount === 4){
    game.update(1);
  }

  if(gameState === 1){
    play();
    game.play();
  }
}




