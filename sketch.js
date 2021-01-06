var bullet,bullet2;
var thickness,thickness2;
var weight,weight2;
var speed,speed2;
var wall,wall2;

function setup(){
  
createCanvas(1600,400);

bullet = createSprite(500,150,thickness,20);
bullet2 =createSprite(500,250,thickness2,20);
bullet.shapeColor = ("white");
bullet2.shapeColor = ("white");

thickness = random(22,83);
thickness2 = random(20,80);

speed = random(223,321);
speed2 = random(200,300);

weight = random(30,52);
weight2 = random(35,55);

wall = createSprite(1200,200,thickness,height/2);
wall2 = createSprite(1400,200,thickness2,height/2);
wall.shapeColor = ("purple");
wall2.shapeColor = ("orange");
}
function draw(){
  background(2,2,2);
bullet.velocityX = speed;
bullet2.velocityX = speed2;

if(bullet.x+bullet.width>=wall.x){
  bullet.velocityX = 0;

  var damage = 0.5*weight*speed*speed/wall.width*wall.width*wall.width;

  if(damage>10){
    wall.shapeColor = ("red");
  }
  else
  if(damage<10){
    wall.shapeColor = ("green");
  }

}
if(bullet2.x+bullet2.width>=wall2.x){
  bullet2.velocityX = 0;

  var damage2 = 0.5*weight2*speed2*speed2/wall2.width*wall2.width*wall2.width;

  if(damage2>10){
    wall2.shapeColor = ("red");
  }
  else
  if(damage2<10){
    wall2.shapeColor = ("green");
  }
}





















  drawSprites();
}
