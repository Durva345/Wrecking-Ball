const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground,box1,box2;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic : true
  }

  ground = Bodies.rectangle(400,350,800,20,options);
  World.add(world,ground);

box1 = new Box(600,300,50,50);
box2 = new Box(600,250,50,50);
box3 = new Box(600,200,50,50);
box4 = new Box(600,150,50,50);
ball = new Ball(400,200,30);
sling = new SlingShot(ball.body,{x:500,y:50})
}

function draw() {
  background(0);
   Engine.update(engine);

 
  fill("brown");
  rectMode(CENTER)
rect(ground.position.x,ground.position.y,800,20);

box1.display();
box2.display();
box3.display();
box4.display();
ball.display();
sling.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})

}