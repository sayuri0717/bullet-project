var bullet;
var wall;
var speed;
var weight;
var damage;
var thickness;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(10, 200, 50, 50);
  
  wall=createSprite (1200,200,thickness,height/2)
  wall.shapeColor=(80,80,80);

  speed=random(223,321);
  weight=random(30,52);
thickness =random(22,83);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  
 // bullet.velocityX=speed;
 bullet.velocityX=speed;
// bullet.collide(wall);

if (isTouching()){
   bullet.velocityX=0;

   damage=0.5*weight*speed;

  if (damage > 10){
  bullet.shapeColor = "red";
}

if (damage <10){
  bullet.shapeColor = "green";
  }
}
  drawSprites ();
}


