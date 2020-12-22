
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var grnd;
var dustbin1;


function setup() {
	createCanvas(600,400);
	
	engine = Engine.create();
	world = engine.world;
	paper1 = new paper(100,25,25,25)
	grnd = new Ground(500,390,1000,10)
	dustbin1 = new dusbin(400,310,25,25)
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(200);

  paper1.display();
  grnd.display();
  dustbin1.display();
 

  drawSprites();
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x: 20, y: -20})
	}

}