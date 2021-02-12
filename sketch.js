var hr;
var min;
var sec;


function setup() {
  createCanvas(800,400);
//  createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
}

function draw() {
  background("#ebd8b7"); 
  sec=second();
  min=minute();
  hr=hour();

  secAngle=map(sec,0,60,0,360);
  minAngle=map(min,0,60,0,360);
  hrAngle=map(hr-12,0,12,0,360);

  translate(400,200);
  rotate(-90);

  
  push();
  //translate(400,200);
  rotate(secAngle);
  strokeWeight(7);
  stroke("#c6a9a3")
  line(0,0,100,0);
  pop();

  push();
//  translate(400,200);
  rotate(hrAngle);
  strokeWeight(7);
  stroke("#9a8194")
  line(0,0,80,0);
  pop();

  push();
//  translate(400,200);
  rotate(minAngle);
  strokeWeight(9);
  //nofill();
  stroke("#99bbad")
  line(0,0,120,0);
  pop();
  console.log(hr,min,sec); 

  strokeWeight(10);
  noFill();
  
}