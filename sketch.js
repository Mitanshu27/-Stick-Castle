const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
function setup() 
{
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground();
  b1 = new Block(400,275,300,200);
  b2 = new Block(228,255,40,240);
  b3 = new Block(573,255,40,240);
  b4 = new Block(400,165,20,20);
  b5 = new Block(450,165,20,20);
  b6 = new Block(500,165,20,20);
  b7 = new Block(350,165,20,20);
  b8 = new Block(300,165,20,20);
  b9 = new Block(228,120,60,30);
  b10 = new Block(573,120,60,30);

  //createSprite(400, 200, 50, 50);

}

function draw() 
{
  background(0); 
  Engine.update(engine);
  ground.display(); 
  fill("brown");
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  drawSprites();
}