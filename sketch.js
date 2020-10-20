
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var circle1;
var circle;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	circle=Bodies.circle(200,100,70);
	World.add(world,circle);
	circle1=new Paper(100,200,50,20);

	Engine.run(engine);
  
}


function draw() {
  
background(0);
Engine.update(engine);
/*ellipseMode(RADIUS);
fill(255);
ellipse(200,100,70,0);*/
circle1.display();
drawSprites();
}



