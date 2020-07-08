var bg;
var basketImg;
var eggImg;
function preload(){
  bg=loadImage("images/gro.png")  
 basketImg=loadImage("images/eggbasket.jpg")  
 eggImg=loadImage("images/egg.png")
}
function setup (){
    createCanvas(displayWidth-100,displayHeight-100);
    basket=createSprite(500,700);
   basket.addImage(basketImg);
}
function draw (){
  
    background(bg);
    basket.x=mouseX;
    basket.scale=0.5;
    if(frameCount %100===0)
    spawnEggs();
    drawSprites();
    textSize(90);
    text(mouseX+"--"+mouseY,500,100);
}
function spawnEggs(){
    var rand=random(1,4);
    
    var egg=createSprite(200,165,50,50);
    egg.velocityY=+3;
    egg.addImage(eggImg);
    egg.scale=0.1;
    switch(rand){
        case 1:
        egg.x=316;
        break;

        case 2:
        egg.x=556;
        break;

        case 3:
        egg.x=800;
        break;

        case 4:
        egg.x=1034;
        break;
        
        








    }
}





