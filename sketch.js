
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var box1, box2, box3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper = new Paper(20,20);
  box1 = new Dustbin(630,500,190,20);
  box2 = new Dustbin(550,320,20,140);
  box3 = new Dustbin(710,320,20,140);
  
  ground = new Ground(400,height,800,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  //text(mouseX+","+mouseY,600,200);
  
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  ground.display();

  drawSprites();

}

function keyPressed() {
   if (keyCode === UP_ARROW) {
     Matter.Body.applyForce(paper.body, paper.body.position, {x:55,y:-75});

   }
}



