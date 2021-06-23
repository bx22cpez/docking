var iss;
var spacecraft, spacecraftMoving;
var hasDocked;

var sp1Image, sp2Image, sp3Image, sp4Image, spacebgImage, issImage;

hasDocked = false;

function preload(){
  spacebgImage = loadImage("spacebg.jpg");

  
  sp1Image = loadImage("spacecraft1.png");

 
  sp2Image = loadImage("spacecraft2.png");

  
  sp3Image = loadImage("spacecraft3.png");

 
  sp4Image = loadImage("spacecraft4.png");

  
  issImage = loadImage("iss.png");

  //spacecraftMoving = loadAnimation(sp1Image, sp2Image, sp3Image, sp4Image);
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImage);

  spacecraft = createSprite(random(100,700),300,50,50);
  spacecraft.addImage(sp1Image);
  //spacecraft.addAnimation("moving" ,spacecraftMoving);
 
  spacecraft.scale = 0.2;
}

function draw() {
  background(spacebgImage);  
  
  if(!hasDocked){

  }
  
  if (keyDown("left")){
    spacecraft.addImage(sp3Image);
    spacecraft.x = spacecraft.x - 2;
  }
  
  if (keyDown("right")){
    spacecraft.addImage(sp4Image);
    spacecraft.x = spacecraft.x + 2;
  }

  if (keyDown("down")){
    spacecraft.addImage(sp2Image);
  }

  if (keyDown("up")){
    spacecraft.y = spacecraft.y - 2;
  }


  if (spacecraft.y < 270){
    console.log("Docked");
    text("Docking successful!", 200,300);
    textSize(20);
  }




  drawSprites();
}