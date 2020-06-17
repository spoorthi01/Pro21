var bullet,speed,weight;
var wall,thickness;

function setup() {
  createCanvas(1600,400);
  
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet = createSprite(50, 200, 70, 20);
  bullet.velocityX = speed;
  

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);

  
}

function draw() {
  background(255,255,255);  
  
  if(isTouching(bullet,wall)){
    
    bullet.velocityX = 0;

     var damage = 0.5 * weight * speed * speed / (thickness*thickness*thickness);
     console.log(damage);
      
     if(damage < 10 ){

       wall.shapeColor = color(255,0,0);

     } else if(damage > 10 ){

        wall.shapeColor = color(0,255,0);

     }
    
  }
  

  
  
  drawSprites();
}

function isTouching(obj1,obj2){
    
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
      && obj2.x - obj1.x < obj2.width/2 + obj1.width/2 &&
      obj1.y - obj2.y < obj2.height/2 + obj1.height/2
      && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
        return true;
  }else{
    return false;
  }
}

