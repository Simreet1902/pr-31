const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const World = Matter.World;

var engine, world;
var ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  //createSprite(400, 200, 50, 50);
  ground = new Ground(240,780,480,20);

  
 
for(var k = 0; k <=480; k=k+80){
  divisions.push(new Division (k, height-divisionHeight/2, 10, divisionHeight));
}

if(frameCount % 60===0){
  particles.push(new Particle (random(width/2-10, width/2+10), 10,10))
}

for (var j = 40; j<=width; j=j+50)
{
  plinkos.push(new Plinko(j,75));
}
for (var j =15; j<=width-10; j=j+50)
{
  plinkos.push(new Plinko(j,175));
}

}

function draw() {
  background(0);  

  ground.display();
  Engine.update(engine);

  for (var j =0; j< plinkos.length; j++)
{
  plinkos[j].display();
}

  for (var j =0; j< particles.length; j++)
{
  particles[j].display();
}


  for (var k = 0; k< divisions.length; k++)
  {
    divisions[k].display();
  }
  
  drawSprites();
}

