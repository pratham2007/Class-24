const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var box1, box2, box3, box4, box5;
var ground1;
var log1, log2, log3, log4;
var pig1, pig2;
var bird;


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  //box1 = new Box(400, 300, 50, 50);
  log1 = new Log(450, 250, 200, PI/2);
  box2 = new Box(400, 300, 50, 50);
  box3 = new Box(500, 300, 50, 50);
  pig1 = new Pig(450, 300);

bird = new AngryBird(50, 200);

  log2 = new Log(450, 150, 200, PI/2);
  log3 = new Log(400, 100, 150, PI/6);
  log4 = new Log(500, 100, 150, -PI/6);
  box1 = new Box(400, 200, 50, 50);
  box4 = new Box(500, 200, 50, 50);
  box5 = new Box(450, 100, 50, 50);
  pig2 = new Pig(450, 200);
 // box4 = new Box(500, 100, 50, 50);
  ground1 = new Ground(400, height, 800, 20);

}

function draw() {
  background("skyblue"); 

  Engine.update(engine);
  
  box2.display();
  box3.display();
  log1.display();
  pig1.display();
  box4.display();
  box1.display();
  log2.display();
  pig2.display();
  box5.display();
  log3.display();
  log4.display();
  ground1.display();
  bird.display();
  
  
  // drawSprites();
}