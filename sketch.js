var EYE;
var EYE2;
var eyesound;
var x = 200;
var y = 200;
var v = 100;
var url;
var w = 100;
function preload() {
  EYE = loadImage("assets/EYE.png");
  EYE2 = loadImage("assets/EYE2.png");
 eyesound = loadSound("assets/YOULOSE.mp3");
}
function setup() {
 createCanvas (windowWidth,windowHeight);
  imageMode(CENTER);
  //background(0, 255, 255);
  noCursor();
  //eyesound.play();
  fill(0);
  noStroke();
  url = getURL();
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight)
}



function draw() {
 background (0,255,255);
 
 image(EYE, mouseX,mouseY, EYE.height/2, EYE.width/2);
 image(EYE2,x,y, EYE2.height/2, EYE2.width/2);
 x += random(-v,v);
 y += random(-v,v);
 if(x<0){
  x+=v;
 }
 if(y<0){
  y+=v;
 }
 if(x>windowWidth){
  x-=v;
 }
 if(y>windowHeight){
  y-=v;
 }
 
 if(dist(mouseX,mouseY,x,y) <= EYE.height/2){
  eyesound.play();
 }
 
 text(url, w, height/1);
 x--;
}







//
//
//avoid the eye game
//
//
//