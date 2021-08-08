const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var engine, world;
var backgroundImg;
var snowFlakes = []

function preload(){
backgroundImg=loadImage("snow2.jpg");
}  


function setup() {

  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
background(backgroundImg);
Engine.update(engine);
//if(frameCount % 10 === 0){
//  console.log("snow flake number"+frameCount);
var snowflake = new Snow(Math.round(random(0, 800)),0)
 snowFlakes.push(snowflake)

 for(var s = 0; s<snowFlakes.length; s = s+1){
  snowFlakes[s].display() 
 // console.log(snowFlakes[s].body.position.y);
 //}

}
/*for(var s=0;s<snowFlakes.length; s++){
   if(snowFlakes[s].y>windowHeight){
      console.log("removing...");
 Matter.World.remove(myWorld,snowFlakes[s].body);
  snowFlakes.splice(s,1); 
}
 }*/
}
