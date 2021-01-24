
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	ball = new Ball(810,160,70,70);
 
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  ball.display();
  drawSprites();
 
}



