const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var  wall2, wall3, wall4;

var ground1;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

wall2 = new Wall2(500, 280 ,100);
wall3 = new Wall(470, 100, 20, -160);
wall4 = new Wall(530, 100, 20, 160);

ground1 = new Ground (400,390,800,20);
World.add(world, ground1);

}

function draw() {
  background(0);  
  Engine.update(engine)
  wall2.display();
  wall3.display(); 
  wall4.display();
  ground1.display();

  drawSprites();
}