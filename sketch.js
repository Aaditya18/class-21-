var Mrect,Frect;
var o1,o2

function setup() {
  createCanvas(800,400);
 Frect= createSprite(400, 200, 50, 50);
 Mrect=createSprite(20,20,70,10);
 o1=createSprite(30,30,30,30);
 o2=createSprite(300,30,20,30);
}

function draw() {
 background(0);
  Mrect.x=World.mouseX;
  Mrect.y=World.mouseY;
o1.velocityX=1;

if (isTouching(Mrect,o2)){
Mrect.shapeColor="magenta";
o2.shapeColor="magenta";

}
else {
  Mrect.shapeColor="green";
  o2.shapeColor="green";
  
}


  drawSprites();


}
function isTouching(object1,object2) {
  if((object1.x-object2.x<=object1.width/2+object2.width/2)&&(object2.x-object1.x<=object1.width/2+object2.width/2)
  &&(object1.y-object2.y<=object1.height/2+object2.height/2) &&(object2.y-object1.y<=object1.height/2+object2.height/2))
  {
    return true;

//Mrect.shapeColor="red";
//Frect.shapeColor="red";
 }else{
  return false;
  //Mrect.shapeColor="blue";
  //Frect.shapeColor="blue";
 }
}