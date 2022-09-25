var skyImg,sky;
var baseImg,base;
var brickImg,brick,brick2,brick3,brick4,brick5,brick6,brick7,brick8,brick9,brick10,brick11,brick12,brick13,brick14,brick15,brick16,brick17,brick18,brick19,brick20,brick21,brick22,brick23,brick24,brick25,brick26,brick27,brick28,brick29,brick30,brick31,brick32,brick33,brick34,brick35,brick36;
var ballImg,ball;

var score=0;





function preload(){
    

skyImg = loadImage("sky.png")
baseImg = loadImage("base.png")
brickImg = loadImage("brick.png")
ballImg = loadImage("ball.png")


}

function setup() {

    createCanvas(windowWidth,windowHeight);

 sky = createSprite(width/2,height/2)
 sky.addImage(skyImg)

 base = createSprite(700,550,0,0)
 base.addImage(baseImg)
 base.scale = 0.6
 base.setCollider("circle",-5,20,85)
    base.debug=true

        
    brick = createSprite(50,60,0,0)
 brick.addImage(brickImg)
 brick.scale = 0.2

 brick2 = createSprite(50,160,0,0)
 brick2.addImage(brickImg)
 brick2.scale = 0.2

 brick3 = createSprite(50,260,0,0)
 brick3.addImage(brickImg)
 brick3.scale = 0.2

 brick4 = createSprite(50,360,0,0)
 brick4.addImage(brickImg)
 brick4.scale = 0.2

 brick5 = createSprite(200,60,0,0)
 brick5.addImage(brickImg)
 brick5.scale = 0.2

 brick6 = createSprite(200,160,0,0)
 brick6.addImage(brickImg)
 brick6.scale = 0.2

 brick7 = createSprite(200,260,0,0)
 brick7.addImage(brickImg)
 brick7.scale = 0.2


 brick8 = createSprite(200,360,0,0)
 brick8.addImage(brickImg)
 brick8.scale = 0.2

 

    brick9 = createSprite(350,60,0,0)
 brick9.addImage(brickImg)
 brick9.scale = 0.2

 brick10 = createSprite(350,160,0,0)
 brick10.addImage(brickImg)
 brick10.scale = 0.2

 brick11 = createSprite(350,260,0,0)
 brick11.addImage(brickImg)
 brick11.scale = 0.2

 brick12 = createSprite(350,360,0,0)
 brick12.addImage(brickImg)
 brick12.scale = 0.2

 brick13 = createSprite(500,60,0,0)
 brick13.addImage(brickImg)
 brick13.scale = 0.2

 brick14 = createSprite(500,160,0,0)
 brick14.addImage(brickImg)
 brick14.scale = 0.2

 brick15 = createSprite(500,260,0,0)
 brick15.addImage(brickImg)
 brick15.scale = 0.2

 brick16 = createSprite(500,360,0,0)
 brick16.addImage(brickImg)
 brick16.scale = 0.2

 brick17 = createSprite(650,60,0,0)
 brick17.addImage(brickImg)
 brick17.scale = 0.2

 brick18 = createSprite(650,160,0,0)
 brick18.addImage(brickImg)
 brick18.scale = 0.2

 brick19 = createSprite(650,260,0,0)
 brick19.addImage(brickImg)
 brick19.scale = 0.2

  brick20 = createSprite(650,360,0,0)
 brick20.addImage(brickImg)
 brick20.scale = 0.2

 brick21 = createSprite(800,60,0,0)
 brick21.addImage(brickImg)
 brick21.scale = 0.2

 brick22 = createSprite(800,160,0,0)
 brick22.addImage(brickImg)
 brick22.scale = 0.2

 brick23 = createSprite(800,260,0,0)
 brick23.addImage(brickImg)
 brick23.scale = 0.2

 brick24 = createSprite(800,360,0,0)
 brick24.addImage(brickImg)
 brick24.scale = 0.2

 brick25 = createSprite(950,60,0,0)
 brick25.addImage(brickImg)
 brick25.scale = 0.2

 brick26 = createSprite(950,160,0,0)
 brick26.addImage(brickImg)
 brick26.scale = 0.2

 brick27 = createSprite(950,260,0,0)
 brick27.addImage(brickImg)
 brick27.scale = 0.2

 brick28 = createSprite(950,360,0,0)
 brick28.addImage(brickImg)
 brick28.scale = 0.2

 brick29 = createSprite(1100,60,0,0)
 brick29.addImage(brickImg)
 brick29.scale = 0.2

 brick30 = createSprite(1100,160,0,0)
 brick30.addImage(brickImg)
 brick30.scale = 0.2

 brick31 = createSprite(1100,260,0,0)
 brick31.addImage(brickImg)
 brick31.scale = 0.2

 brick32 = createSprite(1100,360,0,0)
 brick32.addImage(brickImg)
 brick32.scale = 0.2

 brick33 = createSprite(1250,60,0,0)
 brick33.addImage(brickImg)
 brick33.scale = 0.2

 brick34 = createSprite(1250,160,0,0)
 brick34.addImage(brickImg)
 brick34.scale = 0.2

 brick35 = createSprite(1250,260,0,0)
 brick35.addImage(brickImg)
 brick35.scale = 0.2

 brick36 = createSprite(1250,360,0,0)
 brick36.addImage(brickImg)
 brick36.scale = 0.2


 ball = createSprite(700,510)
 ball.addImage(ballImg)
 ball.scale=0.1
}

function draw() {

    if(keyDown("left_arrow")|| keyCode === 65){
        base.x = base.x - 7
    
    };

    if(keyDown("right_arrow")|| keyCode === 65){
        base.x = base.x + 7
    
    };

    if(keyDown("space") ){
        ball.position.x=base.x;
        
       ball.velocityY=-8
       ball.velocityX= +8
    }

    if(ball.isTouching(brick)){
        brick.destroy()
        score = score+100
      
    };

    if(ball.isTouching(brick2)){
        brick2.destroy()
        score = score+100
      
    };

    if(ball.isTouching(brick3)){
        brick3.destroy()
        
        score = score+100
    };

    if(ball.isTouching(brick4)){
        brick4.destroy()
        score = score+100
      
    };

    if(ball.isTouching(brick5)){
        brick5.destroy()
        
        score = score+100
    };


    if(ball.isTouching(brick6)){
        brick6.destroy()
        score = score+100
      
    };

    if(ball.isTouching(brick7)){
        brick7.destroy()
        
        score = score+100
    };

    if(ball.isTouching(brick8)){
        brick8.destroy()
        score = score+100
      
    };

    if(ball.isTouching(brick9)){
        brick9.destroy()
        
        score = score+100
    };

    if(ball.isTouching(brick10)){
        brick10.destroy()
        score = score+100
      
    };

    if(ball.isTouching(brick11)){
        brick11.destroy()
        score = score+100
      
    };

    if(ball.isTouching(brick12)){
        brick12.destroy()
        score = score+100
      
    };

    if(ball.isTouching(brick13)){
        brick13.destroy()
        
        score = score+100
    };

    if(ball.isTouching(brick14)){
        brick14.destroy()
        score = score+100
      
    };

    if(ball.isTouching(brick15)){
        brick15.destroy()
        
        score = score+100
    };

    if(ball.isTouching(brick16)){
        brick16.destroy()
        
        score = score+100
    };

    if(ball.isTouching(brick17)){
        brick17.destroy()
        score = score+100
      
    };

    if(ball.isTouching(brick18)){
        brick18.destroy()
        
        score = score+100
    };

    if(ball.isTouching(brick19)){
        brick19.destroy()
        
        score = score+100
    };

    if(ball.isTouching(brick20)){
        brick20.destroy()
        score = score+100
      
    };

    if(ball.isTouching(brick21)){
        brick21.destroy()
        
        score = score+100
    };

    if(ball.isTouching(brick22)){
        brick22.destroy()
        
        score = score+100
    };

    if(ball.isTouching(brick23)){
        brick23.destroy()
        score = score+100
      
    };

    if(ball.isTouching(brick24)){
        brick24.destroy()
        score = score+100
      
    };

    if(ball.isTouching(brick25)){
        brick25.destroy()
        score = score+100
      
    };

    if(ball.isTouching(brick26)){
        brick26.destroy()
        score = score+100
      
    };

    if(ball.isTouching(brick27)){
        brick27.destroy()
        score = score+100
      
    };

    if(ball.isTouching(brick28)){
        brick28.destroy()
        score = score+100
      
    };

    if(ball.isTouching(brick29)){
        brick29.destroy()
        score = score+100
      
    };

    if(ball.isTouching(brick30)){
        brick30.destroy()
        score = score+100
      
    };

    if(ball.isTouching(brick31)){
        brick31.destroy()
        score = score+100
      
    };

    if(ball.isTouching(brick32)){
        brick32.destroy()
        score = score+100
      
    };

    if(ball.isTouching(brick33)){
        brick33.destroy()
        score = score+100
      
    };

    if(ball.isTouching(brick34)){
        brick34.destroy()
        score = score+100
      
    };

    if(ball.isTouching(brick35)){
        brick35.destroy()
        score = score+100
      
    };

    if(ball.isTouching(brick36)){
        brick36.destroy()
        score = score+100
      
    };

   


     edges =createEdgeSprites();
    base.collide(edges);
    ball.bounceOff(edges)
    ball.bounceOff(base)
     
 drawSprites()

 textSize(20)
    fill("red")
    text("𝓢𝓒𝓞𝓡𝓔:"   + score,10,550);
}

