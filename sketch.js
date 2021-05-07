const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject;
var dustbin1,dustbin2,dustbin3;
var ground;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject= new Paper(100,630);
	dustbin1= new Dustbin(700,680,200,20);
	dustbin2=new Dustbin(800,640,10,100);
	dustbin3=new Dustbin(600,640,10,100);
	ground = new Ground(400,690);
	Engine.run(engine);

  
}


function draw() {
 
  background(0);
  paperObject.display();
 dustbin1.display()
 dustbin2.display()
 dustbin3.display()
 ground.display();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:298,y:-215});
  
	}
}