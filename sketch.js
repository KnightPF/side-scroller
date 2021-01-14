//the adventures of joe whale, a confusing game.
//NOTABLE THINGS:
//-completely unsure of how to stop the coins from accelerating continuously.
//-not sorry for the broken hitbox mechanic
//-a good amount of this code was inspired by a video from "The Coding Train", link: https://www.youtube.com/watch?v=l0HoJHc-63Q&t=1470s
//-that is also to note a good amount of the code was edited, along with some modifications and additions of my own, such as the scene functions and the score.

//introduction of the variables
let whale;
let wImg;
let tImg;
let bImg;
let cImg;
let dolphins = [];
let coins = [];
let score = 0;
let currentScene = 0;

//function that preloads images into their respective variables.
function preload(){
  bImg = loadImage('background.gif');
  wImg = loadImage('whale.png');
  dImg = loadImage('dolphin.png');
  cImg = loadImage('money.gif');
}

function setup() {
  createCanvas(800, 400);
  whale = new Whale();  
}

function keyPressed(){
  if (key == ' '){
    whale.jump();
  }
}

//intro scene, gives slight instructions as well as title and disclaimer. nothing too fancy.
var scene0 = function (){
  background(90, 110, 230);
  textSize(50);
  text('the adventures of joe whale', 90, 170);
  textSize(20);
  text('press x to start', 305, 230);
  text('press space to jump',285,290);
  text('(disclaimer: not sorry for the hitboxes)', 225, 350)
}

//gameplay scene, calls functions to allow spawning of dolphins and coins, as well as summoning the whale.
var scene1 = function (){
  if (random(1) < 0.03) {
    dolphins.push(new Dolphin ());
  }
  
  if (random(1) < 0.02) {
    coins.push(new Coin());
  } 
  if (frameCount % 20 == 0 && score > 0) {
  score++;
  }else{
  score++;
  }
  fill(0)
  background(bImg);
  text('Score: '+(score),20,30);
  
  for (let d of dolphins) {
    d.move();  
    d.show();
    if (whale.hits(d)) {
    currentScene++;
    }
  }
  for (let c of coins) {
    c.move();
    c.show();
    if (whale.hits(c)) {
      score = score+100;
      c.y = 400;
    }
  }
  whale.show();
  whale.move();
}

//end scene, displays score and gives instructions on how to reset/restart.
var scene2 = function (){
  background(90, 110, 230);
  fill(0);
  textSize(50);
  text('game over', 260, 170);
  textSize(25);
  text('your score was: '+(score), 270, 230);
  text('reload to restart', 285, 300);
}

//draw function, calls scene functions respectively.
function draw() {
  if (currentScene === 0){
     scene0();
    if (key == 'x'){
      currentScene = 1
    }
}

if (currentScene === 1){
        scene1();
}

if (currentScene === 2){
    scene2();
  }
  
//here is some code i decided not to use but not to scrap for now
//   if (random(1) < 0.03) {
//     trains.push(new Dolphin ());
//   }
  
//   if (random(1) < 0.02) {
//     coins.push(new Coin());
//   } 
//   if (frameCount % 20 == 0 && score > 0) {
//   score++;
//   }else{
//   score++;
//   }
//   background(bImg);
//   text('Score: '+(score),20,30);
  
//   for (let t of trains) {
//     t.move();  
//     t.show();
//     if (unicorn.hits(t)) {
//     console.log('Game Over');
//     noLoop();
//     }
//   }
//   for (let c of coins) {
//     c.move();
//     c.show();
//     if (unicorn.hits(c)) {
//       score = score+100;
//       c.y = 400;
//     }
//   }
//   unicorn.show();
//   unicorn.move();
}
