var rs = new Audio("run.mp3");
rs.loop = true;

var js = new Audio("jump.mp3");

var ds = new Audio("dead2.mp3");

var ws = new Audio("win.mp3");




var girl = document.getElementById("girl");

idleImageNumber = 1;

idleAnimationNumber = 0;

function idleAnimation(){

    idleImageNumber = idleImageNumber + 1;

      if(idleImageNumber == 17){

        idleImageNumber = 1;
      }
    girl.src = "resources/idle ("+idleImageNumber+").png";
}

function idleAnimationStart(){
   idleAnimationNumber = setInterval(idleAnimation,200);
}

runImageNumber = 1;

runAnimationNumber = 0;

function runAnimation(){

    runImageNumber = runImageNumber + 1;

   if(runImageNumber == 21){

    runImageNumber = 1;
   }

    girl.src ="resources/run (" + runImageNumber + ").png";
}

function runAnimationStart(){
   runAnimationNumber = setInterval(runAnimation,100);
   clearInterval(idleAnimationNumber);
}

jumpImageNumber = 1;
jumpAnimationNumber = 0;
girlMarginTop = 365;


function jumpAnimation(){

   jumpImageNumber = jumpImageNumber + 1;

   if(jumpImageNumber <= 8){
      girlMarginTop = girlMarginTop - 30;
      girl.style.marginTop = girlMarginTop + "px";
   }

   if(jumpImageNumber >= 9){
      girlMarginTop = girlMarginTop + 30;
      girl.style.marginTop = girlMarginTop + "px";
   }

   if(jumpImageNumber == 15){

      jumpImageNumber = 1;
      clearInterval(jumpAnimationNumber);
      jumpAnimationNumber = 0;
      runImageNumber = 0;
      runAnimationStart();
      
   }
 
   girl.src = "resources/jump (" + jumpImageNumber + ").png";
}

function jumpAnimationStart(){

   clearInterval(idleAnimationNumber);
   runImageNumber = 0;
   clearInterval(runAnimationNumber);
   
  jumpAnimationNumber = setInterval(jumpAnimation,100);
}

function keyCheck(event){

   var keyCode = event.which;

   if(keyCode == 13){

      rs.play();

      

        if(runAnimationNumber == 0){
         runAnimationStart();
         
         
        }

        if(moveBackgroundAnimationId == 0){
         moveBackgroundAnimationId =  setInterval(moveBackground,100);
         
         
        }

        if(boxAnimationId == 0){
          boxAnimationId = setInterval(boxAnimation,100);
        }
   }

   if(keyCode == 32){

      if(jumpAnimationNumber == 0){
        jumpAnimationStart();
        rs.pause();
        js.play();
      }

      }

      if(moveBackgroundAnimationId == 0){
         moveBackgroundAnimationId =  setInterval(moveBackground,100);
      }

      if(boxAnimationId == 0){
         boxAnimationId = setInterval(boxAnimation,100);
      }

   
   
}




var backgroundImagePositionX = 0;

var moveBackgroundAnimationId = 0;

var score = 0;

function moveBackground(){

  backgroundImagePositionX = backgroundImagePositionX - 20;
   document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX + "px";

   score = score + 1;
   document.getElementById("score").innerHTML = score;

   if(score == 200){
      
      document.getElementById("win").style.visibility = "visible";

      clearInterval(boxAnimationId);
      clearInterval(runAnimationNumber);
      rs.pause();
      girlRunAnimationId = -1;

      clearInterval(jumpAnimationNumber);
      js.pause();
      jumpAnimationNumber = -1;

      clearInterval(moveBackgroundAnimationId);
      moveBackgroundAnimationId = -1;

      ws.play();


      
      }

      
}

boxMarginLeft = 1700;

function createBoxes(){

   for(var i =0; i <= 10; i++){

   
   
   var box = document.createElement("div");
   box.className = "box";
   document.getElementById("background").appendChild(box);
   box.style.marginLeft = boxMarginLeft + "px";
   box.id = "box" + i;

 //  boxMarginLeft = boxMarginLeft + 1000;

 if (i < 5){

   boxMarginLeft = boxMarginLeft + 2000;
 }

 if(i >= 5){
   boxMarginLeft = boxMarginLeft + 1000;
 }

}

}

var boxAnimationId = 0;
function boxAnimation(){
   for(var i=0; i<= 10; i++){
      var box = document.getElementById("box"+i);
      var currentMarginLeft = getComputedStyle(box).marginLeft;
      var newMarginLeft = parseInt(currentMarginLeft)-35;
      box.style.marginLeft = newMarginLeft + "px";

      if(newMarginLeft >= -110 & newMarginLeft <= 100){
         if(girlMarginTop > 300){
            clearInterval(boxAnimationId);
      
            clearInterval(runAnimationNumber);
            
            rs.pause();
            
            runAnimationNumber = -1;
      
            clearInterval(jumpAnimationNumber);
            jumpAnimationNumber = -1;
      
            clearInterval(moveBackgroundAnimationId);
            moveBackgroundAnimationId = -1;

           deadAnimationNumber =  setInterval(girlDeathAnimation,100);
           ds.play();
           
           
           
           
           
            
         }
      }
   }
}

deadImageNumber = 1;
deadAnimationNumber = 0;
function girlDeathAnimation(){

   

   deadImageNumber = deadImageNumber + 1;
   

   if(deadImageNumber == 15){
      deadImageNumber = 14;

      document.getElementById("end").style.visibility = "visible";
      document.getElementById("endScore").innerHTML = score;
   }

   girl.src = "resources/Dead (" + deadImageNumber + ").png";
}

function reload(){

   location.reload();
}

function reload1(){
   location.reload();
}
