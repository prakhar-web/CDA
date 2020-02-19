var mret, fret;
function setup() {
  createCanvas(800,400);
  mret = createSprite(400, 200, 50, 50);
  fret = createSprite(400, 200, 50, 50);

  mret.shapeColor = "blue";
  fret.shapeColor = "blue";
}

function draw() {
  background(255,255,255);  

  mret.x = World.mouseX;
  mret.y = World.mouseY;

  if(mret.x - fret.x < mret.width/2 + fret.width/2
    && fret.x - mret.x < mret.width/2 + fret.width/2
    && mret.y - fret.y < mret.height/2 +fret.height/2
    && fret.y - mret.y < mret.height/2 +fret.height/2 ) {
    mret.shapeColor = "red";
    fret.shapeColor = "red";
  }
  else {
    mret.shapeColor = "blue";
    fret.shapeColor = "blue";
  }

  drawSprites();
}