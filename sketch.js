

var trex
var ground, invisibleGround



function preload(){
  
}

function setup() {
  createCanvas(displayWidth, displayHeight);

  var message = "This is a message";
 console.log(message)
  
  trex = createSprite(50,displayHeight-375,20,50);
  

  trex.scale = 0.5;
  
  ground = createSprite(200,displayHeight-400,400,20);

  ground.x = ground.width /2;
  
  
  invisibleGround = createSprite(200,displayHeight-375,400,10);
  invisibleGround.visible = false;
  
  
  
}

function draw() {
  
  background(180);
  
  
  
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
 
    if(keyDown("space")&& trex.y >= 159) {
        trex.velocityY = -12;
        jumpSound.play();
    }
    
    
  
    
      
    
      
    
     
     
      ground.velocityX = 0;
      trex.velocityY = 0
  
     
     
    // if(mousePressedOver(restart)) {
   //   reset();
   // }
   
 

  drawSprites();
}


   