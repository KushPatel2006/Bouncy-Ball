const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;

var engine ,world,ball,ground;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic: true
  }
  ground = Bodies.rectangle(600,390,1200,20,ground_options);
  World.add(world, ground);

  var ball_options = {
    restitution: 1.0

  }
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 1200,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20,20);
}