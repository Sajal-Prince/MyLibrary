var fixedRect, movingRect;
var fixed1 , fixed2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  fixed1 = createSprite(100,50,50,100);
  fixed2 = createSprite(300,100,50,50);
}

function draw() {
  background(0,0,0);  

  fixed2.x = World.mouseX;
  fixed2.y = World.mouseY;

  if(isTouching(fixed1 , fixed2))
  {
      fixed1.shapeColor = "yellow";
      fixed2.shapeColor = "yellow";
  }else{
    fixed1.shapeColor = "green";
    fixed2.shapeColor = "green";
  }

  bounceOff(movingRect , fixedRect);


  drawSprites();
}

