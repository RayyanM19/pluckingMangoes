
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var stone;
var human, humanImage;
var mango, mango2, mango3, mango4;
var elastic;
var tree, treeImage;

function preload()
{
	humanImage = loadImage("PluckingMangoes/boy.png");
	treeImage = loadImage("PluckingMangoes/tree.png");

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,690,800,20);
	human = createSprite(200,645,30,10);
	human.addImage(humanImage);
	human.scale = 0.08;
	stone = new Stone(160,600,35);
	mango = new Mango(620,490,40);
	mango2 = new Mango(570,440,35);
	mango3 = new Mango(660,460,45);
	mango4 = new Mango(600,390,37); 
	elastic = new Chain(stone.body,{x:160,y:590});
	tree = createSprite(600,500,20,20);
	tree.addImage(treeImage);
	tree.scale = 0.3;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  drawSprites();

  ground.display();
  stone.display();
  mango.display();
  mango2.display();
  mango3.display();
  mango4.display();
  elastic.display();

  detectCollision(mango,stone);
  detectCollision(mango2,stone);
  detectCollision(mango3,stone);
  detectCollision(mango4,stone);

  
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    elastic.fly();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body, {x:160, y:600});
		
	}
}

function detectCollision(lmango,lstone){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}
