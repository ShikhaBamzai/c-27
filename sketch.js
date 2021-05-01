
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	//Box1 = new Box(200,610,10,100);
	//Box2 = new Box(500,610,10,100);
	roof = new Box(300,200,300,10);
    
	ball = new Ball(200,350, 50)
	ball1 = new Ball(250,350, 50)
	ball2 = new Ball(300,350, 50)
	ball3 = new Ball(350,350, 50)

	ball4 = new Ball(400,350, 50)

	rope1 = new rope(ball.body, roof.body, -150,0);
	rope2 = new rope(ball1.body, roof.body, -65,0);
	rope3 = new rope(ball2.body, roof.body, -0,0);
	rope4 = new rope(ball3.body, roof.body, 65,0);
	rope5 = new rope(ball4.body, roof.body, 150,0);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  drawSprites();
  //Box1.display();
 // Box2.display();
  roof.display();
  ball.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x: -30, y:-100})
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   
   
	   
	 }
   }



